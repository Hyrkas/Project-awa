// Server

require ('./customer/user')
const http = require('http')
const port = 6000


const server = http.createServer(function(req,res){
server.use(express.urlencoded({extended: false}))

})

server.listen(port, function(error) {
    if (error) {
        console.log('ERROR', error)
    } else {
        console.log('Listening on port ' + port)
    }
})

// Login / Register


