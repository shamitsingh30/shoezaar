const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');

app.use(cors());
// app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    name: 'shoezaar',
    secret: 'basketball',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost/shoezaar-session-cookies',
            autoRemove: 'disable'

        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});