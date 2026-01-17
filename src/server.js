import { randomUUID } from 'node:crypto';
import http from 'node:http';
import { json } from './middlewares/json.js';

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  if (method === 'GET' && url === '/users') {
    return res.end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    users.push({
      id: randomUUID(),
      name,
      email,
    });

    return res.writeHead(201).end('Usuário cadastrado com sucesso!');
  }

  return res.writeHead(404).end('Não há registros de humanos aqui.');
});

server.listen('3333');
