import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { createApp } from './server.js'

let baseUrl
let server

before(async () => {
  server = createApp().listen(0, '127.0.0.1')
  await new Promise((resolve) => server.once('listening', resolve))
  const address = server.address()
  baseUrl = `http://127.0.0.1:${address.port}`
})

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()))
  })
})

test('GET /health returns a successful response', async () => {
  const response = await fetch(`${baseUrl}/health`)
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { status: 'ok' })
})

test('unknown routes return a not found response', async () => {
  const response = await fetch(`${baseUrl}/missing`)
  assert.equal(response.status, 404)
  assert.deepEqual(await response.json(), { error: 'Not found' })
})
