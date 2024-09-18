// Seleciona a primeira ocorrência de um elemento 'img' no documento HTML e armazena na variável minhaImagem
let minhaImagem = document.querySelector('img');

// Define uma função que será executada quando a imagem for clicada
minhaImagem.onclick = function() {
    // Obtém o valor do atributo 'src' da imagem e armazena na variável meuSrc
    let meuSrc = minhaImagem.getAttribute('src');
    // Verifica se o valor de meuSrc é igual a 'imagens/firefox-icon.png'
    if(meuSrc === 'imagens/firefox-icon.png') {
      // Se for, altera o atributo 'src' da imagem para 'imagens/firefox2.png'
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      // Caso contrário, altera o atributo 'src' da imagem para 'imagens/firefox-icon.png'
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}

// Personalize a mensagem de boas vindas

// Seleciona o primeiro botão encontrado no documento HTML e armazena na variável meuBotao
let meuBotao = document.querySelector('button');
// Seleciona o primeiro cabeçalho encontrado no documento HTML e armazena na variável meuCabecalho
let meuCabecalho = document.querySelector('h1');

// Define uma função para definir o nome do usuário
function defineNomeUsuario() {
  // Pede ao usuário para digitar seu nome e armazena na variável meuNome
  alert('Olá, seja bem vindo!')
  let meuNome = prompt('Por favor, digite seu nome.');
  // Armazena o nome do usuário no armazenamento local do navegador
  localStorage.setItem('nome', meuNome);
  // Altera o texto do cabeçalho para incluir o nome do usuário
  meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
}

// Verifica se o nome do usuário está armazenado no armazenamento local do navegador
if(!localStorage.getItem('nome')) {
  // Se não estiver armazenado, chama a função para definir o nome do usuário
  defineNomeUsuario();
} else {
  // Caso contrário, obtém o nome do usuário armazenado e atualiza o texto do cabeçalho
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

// Define uma função que será executada quando o botão for clicado
meuBotao.onclick = function() { 
  // Chama a função para definir o nome do usuário
  defineNomeUsuario();
}