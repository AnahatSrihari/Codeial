
//require mongoose
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');

const db = mongoose.connection;

//if erroe
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

//if connected
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

// exporting the module to use it 
module.exports = db;