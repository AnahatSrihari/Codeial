const express = require('express');
const app = express();
// require cookie-parser.
const cookieParser = require('cookie-parser')

app.use(express.urlencoded())
// telling app to to use cookie-parser - midleware
app.use(cookieParser());

const port = 8000;
// requiring the database module
const db = require('./config/mongoose');


//Require express-ejs-layouts library
const expressLayouts = require('express-ejs-layouts');
const { name } = require('ejs');

app.use(express.static('./assets'));
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//telling our app to use express layouts
app.use(expressLayouts);

// requiring for passport.js - used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


// use express router
// this router will used for any route functions
app.use('/', require('./routes'))

// telling the app to use ejs as the view engine
app.set('view engine', 'ejs');
// directly accesing the ./views folder
app.set('views', './views');


app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})