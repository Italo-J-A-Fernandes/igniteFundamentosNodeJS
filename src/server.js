import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Hello Teste');
});

server.listen('8888');
