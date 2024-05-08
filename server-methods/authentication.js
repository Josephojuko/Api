const fs = require('fs')
const path = require('path')

const userDbPath = path.join(__dirname, 'db', 'books.json')

function getAllUsers () {
    return new Promise ((resolve, reject) => {
        fs.readFile(userDbPath, 'utf8', (err, users) => {
            if (err) {
                reject(err)
            }
            resolve (JSON.parse(users))
        })
    })
}


function authenticate (req, res) {
    return new Promise((resolve, reject) => {

        const body = []

        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)

            if (!parsedBody) {
                reject('No username or password provided')
            }

            const Logindetails = JSON.parse(parsedBody)
            // console.log(Logindetails)

            const users = await getAllUsers()
            console.log(users)
            const userFound =  users.find((user) => {
                return user.username === Logindetails.username
            })
            if (!userFound) {
                reject('User not found. Please sign up')
            }
            if (userFound.password !== Logindetails.password) {
                reject('Invalid username or password')
            }

            resolve()
        })
    
    })
    

    
        
}

module.exports = {
    authenticate
}