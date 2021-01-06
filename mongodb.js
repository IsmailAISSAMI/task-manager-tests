// CRUD tests (create, read, update, delete)

// Modules
const mongodb = require('mongodb')

// Constants 
/* 
   Mongo client is gonna give us access to the function necessary to connect 
   to the database so we can perform our four basic CRUD operations.
*/
const MongoClient = mongodb.MongoClient
// Connection URL
const connectionUrl = 'mongodb://127.0.0.1:27017'
// Database Name
const database = 'task-manager'

// We use connect method to connect to the server

MongoClient.connect(connectionUrl, { useNewUrlParser: true,  useUnifiedTopology: true }, (error, client)=> {
    if (error){
        return console.log('Unable to connect to database!!')
    }
    console.log('Connected successfully to server!')
})