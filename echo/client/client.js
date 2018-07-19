var socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('error', function(message) {
	console.log('An error occured!');
	console.log('Message: ', message);
});

socket.addEventListener('open', function(message) {
	console.log('Connection is open!');
	console.log('Message:', message);
});

socket.addEventListener('close', function(message) {
	console.log('Socket is closed.');
	console.log('Message:', message);
});

socket.addEventListener('message', function(message) {
	console.log('NEW MESSAGE!');
	console.log('Message:', message);
});
function connect(){
	socket =  new WebSocket('ws://localhost:8080');
	console.log("New connection established!");
}

function disconnect(){
	console.log("Closing connection...");
	socket.close();
}
function sendMessage() {
	console.log('SENDING MESSAGE...');
	socket.send("Hello world!!!");
}

document.getElementById("openButton").addEventListener('click', connect);
document.getElementById("messageButton").addEventListener('click',sendMessage);
document.getElementById("closeButton").addEventListener('click', disconnect);
