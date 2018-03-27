const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const router 	= require('./router');
//var sinchRequest = require('sinch-request');
var sinchTicketGen = require('sinch-ticketgen');
var sinchApi = require('sinch-rest-api')({
    key: '6c726fea-23ff-49ac-89cb-5aa31266f797',
    secret: '4Hj/zoOx3EStP1W81sNVKg=='
});

const hostname = '192.168.100.8';
const port = 3030;
const app 		= express();
app.use(bodyParser.json({ type: '*/*' }));
router(app);
// Your application credentials
// Your application credentials
var creds = {
    key: '3978ee9a-e133-4389-b94e-115e3599ac75',
    secret: '4Hj/zoOx3EStP1W81sNVKg=='
}
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');
//     res.end('Hello World\n');
//});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

 //var ticket=sinchTicketGen("3978ee9a-e133-4389-b94e-115e3599ac75", '4Hj/zoOx3EStP1W81sNVKg==', {username: "shaheermuzammil@gmail.com"});

// console.log("icket+++++++++");
// console.log(ticket.userTicket);
//var consoleOut = function(result) { console.log(result); }
// sinchApi.messaging.sendSms({number: '+1555123456', message: 'Hello World!'})
//     .then(consoleOut)
//     .fail(consoleOut)


// sinchApi.base.getInstance(ticket) // Retrieve instance using a ticket
//     .then(sinchApi.pushInstance.bind(sinchApi)) // Push instance to credential stack
//     .then(sinchApi.calling.getConfiguration) // Retrieve call config for particular user
//     .then(console.log("success++++"))
//     .fail(console.log("Fail+++++++++++++"))





// axios.post('https://example.com/auth', {
//     userId: '1',
//     title: todoTitle,
//     completed: false
// })
//     .then(function (response) {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//     })
//     .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//     });















// Create a server
// var server = http.createServer(function handleRequest(request, response) {
//     var data = '';
//     request.on('data', function (chunk) {
//         data += chunk; // Collect POST data
//     });
//
//     request.on('end', function() {
//         request.data = data;
//
//         // Verify signature
//         var validSignature = sinchRequest.verifySignature(request, creds);
//
//         response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
//         if(validSignature) {
//             response.end(someResponse); // Give good response
//         }
//         else {
//             response.end('{}'); // This was not from Sinch, give empty response
//             // Optionally this attempt should be logged for later investigation
//         }
//     });
// });

//server.listen(3000, function(){ console.log('Server is running'); });


