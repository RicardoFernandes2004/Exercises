let filmes = [];
if (localStorage.getItem('filmes')) {
  filmes = JSON.parse(localStorage.getItem('filmes'));
} else {
  filmes = [
    { id: 0, nome: 'Harry Potter', genero: 'fantasia', lancamento: 2001 },
    { id: 1, nome: 'Avatar', genero: 'fantasia', lancamento: 2010 },
    { id: 2, nome: 'O Senhor dos Anéis', genero: 'fantasia', lancamento: 2000 },
    { id: 3, nome: 'As Branquelas', genero: 'comédia', lancamento: 2007 },
    { id: 4, nome: 'A Lagoa Azul', genero: 'romance', lancamento: 1983 }
  ];
  localStorage.setItem('filmes', JSON.stringify(filmes));
}
let filmesFavoritos = [];
if (localStorage.getItem('favoritos')) {
  filmesFavoritos = JSON.parse(localStorage.getItem('favoritos'));
}
const btnAdicionar = document.querySelector('button');
const listaFilmes = document.querySelector('#listaFilmes');
window.onload = () => {
  renderizarLista();
};
const renderizarLista = () => {
  listaFilmes.innerHTML = '';
  filmes.forEach((filme) => {
    const itemLista = document.createElement('li');
    itemLista.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    const textoFilme = document.createElement('span');
    textoFilme.textContent = filme.nome;
    const favorito = document.createElement('img');
    const isFavorito = filmesFavoritos.some((fav) => fav.id === filme.id);
    if (isFavorito) {
      favorito.src = 'img/heart-fill.svg';
      favorito.alt = 'Favorito';
    } else {
      favorito.src = 'img/heart.svg';
      favorito.alt = 'Não Favorito';
    }
    favorito.style.cursor = 'pointer';
    favorito.style.width = '24px';
    favorito.style.height = '24px';
    favorito.addEventListener('click', (e) => {
      favoritoClicado(e, filme);
    });
    itemLista.appendChild(textoFilme);
    itemLista.appendChild(favorito);
    listaFilmes.append(itemLista);
  });
};
btnAdicionar.addEventListener('click', () => {
  const inputUsuario = document.querySelector('#filmeInput');
  const nomeFilme = inputUsuario.value.trim();
  if (nomeFilme !== '') {
    let id = filmes.length ? filmes[filmes.length - 1].id + 1 : 0;
    const novoFilme = { id: id, nome: nomeFilme, genero: '', lancamento: '' };
    filmes.push(novoFilme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    renderizarLista();
    inputUsuario.value = '';
  } else {
    alert('Por favor, digite o nome do filme.');
  }
});
const favoritoClicado = (eventoDeClique, objetoFilme) => {
  const favoriteState = {
    favorited: 'img/heart-fill.svg',
    notFavorited: 'img/heart.svg'
  };
  const favorito = eventoDeClique.target;
  const indexFavorito = filmesFavoritos.findIndex((fav) => fav.id === objetoFilme.id);
  if (indexFavorito === -1) {
    favorito.src = favoriteState.favorited;
    saveToLocalStorage(objetoFilme);
  } else {
    favorito.src = favoriteState.notFavorited;
    removeFromLocalStorage(objetoFilme.id);
  }
};
const saveToLocalStorage = (objetoFilme) => {
  filmesFavoritos.push(objetoFilme);
  localStorage.setItem('favoritos', JSON.stringify(filmesFavoritos));
};
function removeFromLocalStorage(id) {
  filmesFavoritos = filmesFavoritos.filter((movie) => movie.id !== id);
  localStorage.setItem('favoritos', JSON.stringify(filmesFavoritos));
}
