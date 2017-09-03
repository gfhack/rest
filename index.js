const restify = require('restify')
const server = restify.createServer()

server.get('/', (request, response, next) => {
  response.send('index')
  next()
})

server.get('/hello/:name', (request, response, next) => {
  response.send('hello ' + request.params.name)
  next()
})

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
})
