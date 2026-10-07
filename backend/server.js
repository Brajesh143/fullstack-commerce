import express from 'express'

const port = Number(process.env.PORT) || 3000

const createApp = () => {
  const app = express()

  app.get('/health', (_request, response) => {
    response.json({ status: 'ok' })
  })

  app.use((_request, response) => {
    response.status(404).json({ error: 'Not found' })
  })

  return app
}

const app = createApp()

if (process.argv[1] === new URL(import.meta.url).pathname) {
  app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`)
  })
}

export { app, createApp }
