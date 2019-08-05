const supertest = require('supertest')
const { app } = require('#/app')

const server = app.callback()
const request = supertest(server)

describe('routes', () => {
  it(' GET /', () => {
    return request.get('/').expect(200)
  })
  it(' POST /add', () => {
    return request
      .post('/add')
      .send({ numbers: '1 2 -4 5' })
      .expect(200)
      .expect({ result: 4 })
  })
  it(' GET /this-is-json', () => {
    return request
      .get('/this-is-json')
      .expect(200)
      .expect({
        'this-is-key': 'this-is-value',
      })
  })
})
