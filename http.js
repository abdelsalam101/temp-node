const http = require('http')

const server = http.createServer((req, res) => {
  if( req.url === '/'){
    res.end('welcome to the home page')
  }
  if(req.url === '/about'){
    res.end('this is our about page')
  }
  res.end(`
  <h1>Oooops!</h1>
  <p>Sorry but we couldn't find what you were looking for.</p>
  <a  href="/">Go back Home</a>
  `)
})

server.listen(5000)