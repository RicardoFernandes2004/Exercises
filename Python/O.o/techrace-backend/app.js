import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';
import http from 'http';
import { PythonShell } from 'python-shell';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o caminho atual corretamente com import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializando o servidor
const app = express();
const server = http.createServer(app);

// Habilitando o CORS para o Express
app.use(cors({
  origin: ['http://127.0.0.1:5501', 'http://localhost:5501'],
  methods: ['GET', 'POST'],
}));

// Inicializando o Socket.io com suporte a CORS
const io = new Server(server, {
  cors: {
    origin: ['http://127.0.0.1:5501', 'http://localhost:5501'],
    methods: ['GET', 'POST'],
  },
});

app.use(bodyParser.json());

// Rota padrão para evitar "Cannot GET /"
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor do TechRac-E!');
});

// Endpoint de previsão (via HTTP POST)
app.post('/predict', (req, res) => {
  let data = {
    avg_position: req.body.position,
    avg_points: req.body.points
  };

  let options = {
    mode: 'json',  // Ensures JSON is used for communication
    pythonOptions: ['-u'],  // Ensures unbuffered output
    args: [JSON.stringify(data)]
  };

  console.log('Dados enviados para Python (POST):', options);

  const pythonScriptPath = path.join(__dirname, 'IA', 'predict.py');
  console.log('Caminho do script Python:', pythonScriptPath);

  PythonShell.run(pythonScriptPath, options, (err, results) => {
    if (err) {
      console.error('Erro ao rodar o script Python (POST):', err);
      return;
    }
    console.log('Previsão recebida do Python (POST):', results);

    if (results && results.length > 0) {
      res.json({ prediction: results[0] });
    } else {
      console.error('Nenhuma previsão retornada pela IA (POST)');
      res.status(500).send('Erro ao processar a previsão');
    }
  });
});

// WebSocket para comunicação em tempo real
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('car_data', (data) => {
    console.log('Dados recebidos do cliente (WebSocket):', data);

    let transformedData = {
      avg_position: data.avg_position,
      avg_points: data.avg_points
    };

    let options = {
      mode: 'json',  // Ensures JSON is used for communication
      pythonOptions: ['-u'],  // Ensures unbuffered output
      args: [JSON.stringify(transformedData)]
    };

    console.log('Dados enviados para Python (WebSocket):', options);

    const pythonScriptPath = path.join(__dirname, 'IA', 'predict.py');
    console.log('Caminho do script Python (WebSocket):', pythonScriptPath);

    let pyshell = new PythonShell(pythonScriptPath, options);

    pyshell.on('message', (message) => {
      // Handle message from Python (already parsed as JSON)
      console.log('Previsão recebida do Python (WebSocket):', message);

      socket.emit('prediction', { prediction: message });
      console.log('Evento prediction emitido com sucesso (WebSocket):', message);
    });

    pyshell.end((err) => {
      if (err) {
        console.error('Erro ao finalizar o script Python (WebSocket):', err);
      } else {
        console.log('Python script finalizado (WebSocket)');
      }
    });
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciando o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
