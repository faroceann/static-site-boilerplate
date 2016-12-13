var express = require('express'),
  app = express(),
  bodyParser = require('body-parser')
  mode = process.argv[2];

console.log(mode);

var useDir = 'app';
if (mode === 'production') 
  useDir = 'dist';

// set the view engine to ejs
app.set('view engine', 'ejs');
// set view directory 
app.set('views', __dirname + '/' + useDir + '/views/');

// serve static files
app.use(express.static(useDir));

// body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// index page 
app.get(['/', '/home'], function (req, res) {
  res.render('pages/index');
});

app.listen(3030);
console.log('3030 is the magic port');
