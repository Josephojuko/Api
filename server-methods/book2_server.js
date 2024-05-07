const http = require('http')
const fs = require('fs')
const path =  require('path')

const booksDbPath = path.join(__dirname, 'db', 'books.json')

const PORT = 4000
const HOST_NAME = 'localhost'

function requestHandler(req, res) {
    if (req.url === '/books' && req.method === 'GET'){
        console.log('GET REQUEST TO BOOKS ROUTE')
    }
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    booksDB = JSON.parse(fs.readFileSync(booksDbPath, 'utf8'))
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
    // console.log(booksDB)
})
