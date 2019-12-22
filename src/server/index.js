import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { longListData } from '../fixtures/longListData'

import { App } from '../components/App'

var request = require('request')
var cors = require('cors')

const sheet = new ServerStyleSheet()
const app = express()
let initial_state

app.use(cors())

app.use(express.static('dist/'))

try {
	var appHtml = renderToString(sheet.collectStyles(<App />))
	var styleTags = sheet.getStyleTags()
} catch (error) {
	console.error(error)
} finally {
	sheet.seal()
}

app.get('/api/data', (req, res) => {
  res.send(longListData)
})

app.get('*', (req, res) => {
	console.log(req.baseUrl)

	res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR React</title>
          ${styleTags}
          <script src="/js/index_bundle.js" defer></script>
          <script type="text/plain" id="initial-state" async>${initial_state}</script>
        </head>
        <body>
          <div id="root">${appHtml}</div>
        </body>
      </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is listening localhost:${process.env.PORT || 3000}`)
})

request('http://localhost:3000/api/data', function(error, response, body) {
	console.log('error:', error) // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
  initial_state = body
})
