import { randomUUID } from 'node:crypto';
import http from 'node:http';

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    req.body = null;
  }

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
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
