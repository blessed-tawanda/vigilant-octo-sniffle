var express = require('express')
var server = express();
var path = [];

server.use('/', express.static(__dirname+'/static'))

server.get('/',(request,response)=>{
    response.sendFile(__dirname+"/index.html")
})
server.listen(3000, function(){
    console.log("Listening to port 3000")
})

