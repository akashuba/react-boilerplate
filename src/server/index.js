import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

import { App } from '../components/App'

const sheet = new ServerStyleSheet()
const app = express()

app.use(express.static( 'dist/'))

try {
  var appHtml = renderToString(sheet.collectStyles(<App />))
  var styleTags = sheet.getStyleTags()
  
} catch (error) {
  console.error(error)
} finally {
  sheet.seal()
}

app.get('*', (req, res) => {
  console.log(req.baseUrl);
  
	res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR React</title>
          ${styleTags}
          <script src="/js/index_bundle.js" defer></script>
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
