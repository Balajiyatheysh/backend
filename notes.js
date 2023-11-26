var http = require('http')
const server = http.createServer(function(request, response){
  let body = "Hello world";
  response.writeHead(200, {
    "content-Length":body.length,
    "content-Type": "text/plain"
  })
  response.end(body)
})
server.listen(8080)

let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());