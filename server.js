var http = require("http"),
    port = process.env.PORT || 8888,
    pjson = require('./package.json');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("v" + pjson.version);
});

server.listen(port);
