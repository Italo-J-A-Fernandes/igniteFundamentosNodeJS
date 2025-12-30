import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários');
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Cadastro de usuário');
  }

  return res.end('Hello Teste');
});

server.listen('3333');
