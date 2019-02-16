
require( 'dotenv' ).config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require( 'massive' );
const cors = require( 'cors' );
const { Switch, Route } = require( 'react-router-dom' );
// const cont = require( './controller.js' );
const app = express();


app.use( bodyParser.json() );
app.use( cors() );
massive(process.env.CONNECTION_STRING).then( 
    db => { app.set( 'db', db )}).catch( err => {
    console.log(err)
});

app.get( '/api/users/', ( req, res ) => { 
    req.app.get( 'db' ).get_users().then( get_users  => {
        res.status( 200 ).send( get_users )
        console.log( get_users );
    } ).catch( err => { console.log(err)});
 } );

// app.get( '/api/post/:postid' )

// app.post( '/api/post/userid' )

// app.post( '/api/auth/register' )

// app.post( '/api/auth/login' )

const port = process.env.PORT || 4000

app.listen( port , () => { console.log( `Server listening on port ${port}` ) } );