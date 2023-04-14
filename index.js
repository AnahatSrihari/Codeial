const express = require('express');
const app = express();

const port = 8000;

//Require express-ejs-layouts library
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('./assets'));
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//telling our app to use express layouts
app.use(expressLayouts);


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