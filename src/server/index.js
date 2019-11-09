import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { App } from '../components/App'

const app = express()

app.use(express.static( 'dist'))

app.get('*', (req, res) => {
	res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Universal React</title>
          <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
          <div id="root">${renderToString(<App />)}</div>
        </body>
      </html>
  `)
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening localhost:${process.env.PORT || 3000}`)
})
