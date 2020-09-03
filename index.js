const server = require('./server')

server.get('/', (req, res) => {
    res.json({
        message: "Welcome to my API!"
    })
})

server.listen(4444, () => {
    console.log("Listening on Port 4444")
})