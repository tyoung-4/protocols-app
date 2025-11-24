
// services/collab/index.js
const { setupWSConnection } = require('y-websocket/bin/utils');
const WebSocket = require('ws');
const http = require('http');

const port = process.env.COLLAB_PORT || 1234;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Yjs collab server');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, () => {
  console.log(`y-websocket listening on ${port}`);
});

