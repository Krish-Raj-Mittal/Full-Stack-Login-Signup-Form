const mongoose = require('mongoose');
require('dotenv').config()

const db_Connect = () => {
    mongoose.connect(process.env.MONGOOSE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log('Database is successfully connected'))
    .catch((err)=>{
        console.log(err);
        console.log('Problem to connect Database');
        process.exit(1);
    }) 
}

module.exports = db_Connect;