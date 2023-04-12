const express = require('express');
const app = express();

const port = 8000;

// use express router
// this router will used for any route functions
app.use('/', require('./routes'))

// telling the app to use ejs as the view engine
app.set('view engine','ejs');
// directly accesing the ./views folder
app.set('views','./views');

app.listen(port , function(err){
    if(err){
        console.log( `Error in running the server ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})