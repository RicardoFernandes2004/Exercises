// seleciona os elementos do dom que serão manipulados
const btnCriar = document.querySelector("#btnCriar");
const listaFilmes = document.querySelector("#listaFilmes");
const inputFilme = document.querySelector("#inputFilmes");
const inputAno = document.querySelector("#inputAno");
const inputDiretor = document.querySelector("#inputDiretor");

const filmes = [
    {
        nome: "Vingadores: Ultimado",
        ano: 2019,
        diretor: "Anthony Russo, Joe Russo"
    },
    {
        nome: "O Rei Leão",
        ano: 2019,
        diretor: "Jon Favreau"
    },
    {
        nome: "Toy Story 4",
        ano: 2019,
        diretor: "Josh Cooley"
    },
];

renderizarNaTela();

btnCriar.addEventListener("click", (event) => {
    event.preventDefault();
    criarFilme();
});

function criarFilme(){
    const novoFilme = {
        nome: inputFilme.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    };
    filmes.unshift(novoFilme);
    renderizarNaTela();
};

function renderizarNaTela(){
    listaFilmes.innerHTML = "";
    filmes.forEach(filme => {
        const novoFilme = document.createElement("li");
        novoFilme.innerHTML = `
            <h2>${filme.nome}</h2>
            <p>Ano: ${filme.ano}</p>
            <h3>Diretor: ${filme.diretor}</h3>
            <button onclick="editarFilme(${filmes.indexOf(filme)})">Editar</button>
            <button onclick="apagarFilme(${filmes.indexOf(filme)})">Apagar</button>
            `;
            listaFilmes.appendChild(novoFilme);
    });
};

function editarFilme(idFilme){
    const novoFilme = prompt("digite o novo nome: ", filmes[idFilme].nome);
    const novoAno = prompt("digite o novo ano: ", filmes[idFilme].ano);
    const novoDiretor = prompt("digite o novo diretor: ", filmes[idFilme].diretor);
    filmes[idFilme].nome = novoFilme;
    filmes[idFilme].ano = novoAno;
    filmes[idFilme].diretor = novoDiretor;
    renderizarNaTela();
};

function apagarFilme(idFilme){
    filmes.splice(idFilme, 1);
    renderizarNaTela();
};