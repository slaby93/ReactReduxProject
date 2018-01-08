const express = require('express')

const fs = require('fs')
function saveToFile(data){
    fs.writeFile('data.txt', data)
}

function loadDataFromFile(){
    return new Promise((resolve, reject)=>{
        fs.readFile('data.txt','utf-8', (error, data)=>{
            console.log('error', error)
            console.log('data', data)
            postList = JSON.parse(data)
        })
    })
}

const app = express()
let postList = []
loadDataFromFile()
app.get('/', (request, response)=>{
    response.send('hello World')
})

app.get('/posts', (request, response)=>{
    response.send(JSON.stringify(postList))
})

app.post('/post', (request, response)=>{
    const title = request.query.title
    postList.push({title})
    saveToFile(JSON.stringify(postList))
    response.send('ok')
})

app.listen(3000)