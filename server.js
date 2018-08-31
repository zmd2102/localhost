// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7050;

// Create a generic function to handle requests and responses
function handleFirstRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url + " And I know what you did last summer!");
}
function handleSecondRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url + " And you look great today!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverone = http.createServer(handleFirstRequest);
var servertwo = http.createServer(handleSecondRequest);
// Start our server so that it can begin listening to client requests.
serverone.listen(PORTONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
});
servertwo.listen(PORTTWO, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
