// import jsonserver
const JSONServer = require('json-server')
//create serrver for running json server
const rBuilder = JSONServer.create()

// CREATEING MIDDLEWARE 
const middleware = JSONServer.defaults()
//  imoprt db.json file
const router = JSONServer.router("db.json")
//define port to run server
const PORT = 3000 ||process.env.PORT
//use middle ware
rBuilder.use(middleware)
//use router
rBuilder.use(router)
//tell sserver to listen for client request
rBuilder.listen(PORT,()=>{
    console.log(`resume bulder started port at number ${PORT}`);
    
})