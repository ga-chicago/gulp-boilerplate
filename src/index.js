// Server
// ======
// This file is responsible for 
// starting the Node server.


// Require dependencies
// --------------------
// Require dependencies and init
// the application.
var express = require('express'),
    app     = express();


// Configure settings and middleware
// ---------------------------------
app.use(express.static(__dirname + '/public')); // Enable serving static files


// GET /
// -----
// Homepage. Just serves a simple
// static HTML file.
app.get('/?', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});


// Server startup
// --------------
// Starts the server. We output something to
// the console because some Gulp tasks require
// output or the task will just hang forever.
var server = app.listen(9000, function() {
  console.log('Gulp app started at http://locahost:' + server.address().port);
});
