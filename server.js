var express = require('express');
var app = express();
var router = express.Router();
// set the view engine to ejs
app.set('view engine', 'ejs');

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejs-demo'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('DB Connected!');
});

// use res.render to load up an ejs view file

// index page
router.get('/', function (req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
router.get('/about', function (req, res) {
    res.render('pages/about');
});
app.use('/', router);
app.listen(8080);
console.log('Server is listening on port 8080');