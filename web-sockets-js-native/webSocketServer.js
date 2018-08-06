const WebSocketServer = require('ws');
const logger = require('./logger').child({
  type: 'WebSocketServer',
});

const wss = new WebSocketServer.Server({
  port: 8090,
  clientTracking: true,
});

// Listen for new connections to the WebSocket server
wss.on('connection', (socket) => {
  logger.info('New client connected. Total Clients=', wss.clients.size);

  // Send a new message to this client
  socket.send('Hello from NodeJS Web Socket Server');

  // Adding a listener when this client sends a message
  socket.addEventListener('message', (event) => {
    logger.debug({ message: event.data }, 'Message Received');

    // broadcast message from this client to all other clients
    wss.clients.forEach((client) => {
      client.send(event.data);
    });
  });
});

logger.info('Started Server on localhost:8090');
