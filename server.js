/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require('http-proxy-middleware')

const proxy = {
  '/api': {
    target: 'https://www.omdbapi.com',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
}

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV
const DEV = ENV !== 'production'

const app = next({ dev: DEV, dir: '.' })

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    Object.keys(proxy).forEach(function (context) {
      server.use(context, createProxyMiddleware(proxy[context]))
    })

    server.all('*', (req, res) => handle(req, res))

    server.listen(PORT, err => {
      if (err) {
        console.log(err)
        throw err
      }
      console.info(`> Ready on port ${PORT} [${ENV}]`)
    })
  })
  .catch(err => {
    console.error('An error occurred, unable to start the server')
    throw new Error(err)
  })
