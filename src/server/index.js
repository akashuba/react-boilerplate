import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { listReducer } from '../redux/reducers/listReducer'
import { longListData } from '../fixtures/longListData'

import { App } from '../components/App'

const store = createStore(listReducer)

var request = require('request')
var cors = require('cors')

const sheet = new ServerStyleSheet()
const app = express()
let initial_state = {
  list: null
}

app.use(cors())

app.use(express.static('dist/'))

try {
	var appHtml = renderToString(
		sheet.collectStyles(
			<Provider store={store}>
				<App />
			</Provider>,
		),
	)
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
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(initial_state).replace(/</g, '\\u003c')}
        </script>
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
	initial_state = {
    list: body
  }
})
