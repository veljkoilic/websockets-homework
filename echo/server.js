const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });


server.on('connection', function(client) {
	console.log('Hello Client!');

	client.on('close', function(ws) {
		console.log('The client left...');
	});


	client.on('message', function(message) {
		console.log('Client says: ', message);
	
		client.send(message);

	});
});