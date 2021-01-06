 **1. Start mongodb server**

    /Users/aissa/mongodb/bin/mongod.exe --dbpath=/Users/aissa/mongodb-data

**2. install mongodb GUI** 

 - We installed Robo 3T as our GUI (graphical user interface).
 - Link: [https://robomongo.org/download](https://robomongo.org/download)

**3. install mongodb GUI** 

For the moment though we are going to run a single command on the database asking for the version of  Mongo DB it's running, as long as we get the version back then we know for certain that ***Robo 3T*** was able to connect to the database successfully.
    -> ***Right click the connection*** local-mongodb that we created and 
click on ***open shell***.  
    -> Run:  `db.version()`  

**4. Mongodb documentation** 

[Link to Doc](https://docs.mongodb.com/)
[node.js Drivers (API)](http://mongodb.github.io/node-mongodb-native/3.6/api/)

**5. Setup task-manager project** 

 - `npm init -y`.
 - `npm i mongodb`, [(package documentation).](https://www.npmjs.com/package/mongodb)
 - Create a mongodb.js File.
 - Check the second commit "Connect to MongoDB" on my  repository  github.
 - run : `node mongodb.js` 