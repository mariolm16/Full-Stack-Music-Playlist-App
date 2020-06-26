require('dotenv').config(); //connecting to .env file

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.use('/auth', routes.auth);
// app.use('/songs', routes.songs);
app.use('/profile', routes.profile);
app.use('/playlists', routes.playlists);

app.listen(process.env.PORT, () => {
    console.log('I am listening');
})
