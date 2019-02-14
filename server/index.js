const express = require('express');
const bodyParser = require('body-parser');
const massive = require( 'massive' );
require( 'dotenv' ).config();
// const cont = require( './controller.js' );
const app = express();

massive(process.env.CONNECT_STRING).then(db => { 
    app.set('db', db)
}).catch(err => {
    console.log(err)
});

app.use( bodyParser.json() );

app.get('/api/posts/:userid', )

app.get( '/api/post/:postid' )

app.post( '/api/post/userid' )

app.post( '/api/auth/register' )

app.post( '/api/auth/login' )

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );