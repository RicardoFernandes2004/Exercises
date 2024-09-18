const socket = io('http://localhost:3000');

// Função para enviar os dados do carro
function sendCarData(carData) {
  console.log('Enviando dados do carro:', carData);  // Log dos dados antes de enviar
  socket.emit('car_data', carData);
}

// Escutando a previsão do back-end
socket.on('prediction', (data) => {
  console.log('Evento prediction acionado');
  console.log('Chances de vitória recebidas do servidor: ', data.prediction);
});

// Verificar a conexão com o WebSocket
socket.on('connect', () => {
  console.log('Conectado ao WebSocket');
  const carData = {
    avg_position: 3,  // Agora enviamos avg_position
    avg_points: 50    // E avg_points, que a IA espera
  };
  sendCarData(carData);  // Enviar os dados após a conexão ser estabelecida
  console.log('Dados enviados após a conexão:', carData);
});

// Captura erros de conexão
socket.on('connect_error', (error) => {
  console.error('Erro de conexão ao WebSocket:', error);
});

// Adicionar log de desconexão
socket.on('disconnect', () => {
  console.log('Desconectado do WebSocket');
});
