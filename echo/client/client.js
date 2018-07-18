var socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('error', function(message) {
	console.log('Wow guy, there was an eror.');
	console.log('Heres the message:', message);
});

socket.addEventListener('open', function(message) {
	console.log('Open now!!');
	console.log('Heres the message:', message);
});

socket.addEventListener('close', function(message) {
	console.log('Socket is closed now.');
	console.log('Heres the message:', message);
});

socket.addEventListener('message', function(message) {
	console.log('A NEW MESSAGE!!');
	console.log('Heres the message:', message);
});
function connect(){
	console.log("Closing connection...");
	socket =  new WebSocket('ws://localhost:8080');
}

function disconnect(){
	console.log("Closing connection...");
	socket.close();
}
function sendMessage() {
	console.log('SENDING MESSAGE...');
	socket.send("Hello earthlings!");
}

document.getElementById("openButton").addEventListener('click', connect);
document.getElementById("messageButton").addEventListener('click',sendMessage);
document.getElementById("closeButton").addEventListener('click', disconnect);
