const http = require('http')
const fakeData = ['post1', 'post2']
const server = http.createServer((request, response)=>{
    console.log(request)
    response.end(JSON.stringify(fakeData))
})

server.listen(3000)