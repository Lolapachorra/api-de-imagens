const mongoose = require('mongoose');

require('dotenv').config()

mongoose.set("strictQuery", true);

async function main(){
   
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@apiimg.edx3c.mongodb.net/?retryWrites=true&w=majority&appName=APIimg`
);
console.log('connection established')
    
}

main().catch(err => console.error(err))

module.exports = main;