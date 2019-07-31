var express = require('express');
var serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('Server on'+ port);