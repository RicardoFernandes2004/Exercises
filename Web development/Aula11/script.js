localStorage.setItem('boas-vindas', 'Olá, Dev!');
localStorage.setItem('valido', true);
localStorage.setItem('numero', 20);

let mensagem = localStorage.getItem('boas-vindas');
let tipo = localStorage.getItem('valido');
let numero = localStorage.getItem('numero');
console.log(mensagem); // 'Olá, Dev!'
console.log(tipo); // 'true'
console.log(numero);   // '20'

sessionStorage.setItem('selecionados', [1, 2, 3]);
sessionStorage.setItem('valido', false);
sessionStorage.setItem('email', 'info@email.com');

let lista = sessionStorage.getItem('selecionados').split(",");
let tipo2 = sessionStorage.getItem('valido') == 'true';
let email = sessionStorage.getItem('email');
console.log(lista); // ["1","2","3"];
console.log(tipo); //false;
console.log(email); //info@email.com;

/*
localStorage.setItem('boas-vindas', 'Olá, Dev!');
sessionStorage.setItem('valido', true);
localStorage.removeItem('boas-vindas');
sessionStorage.removeItem('valido');
localStorage.clear()   //elimina toda a informação
sessionStorage.clear() //elimina toda a informação
*/

const produto1 = { id: 2, produto: "Arroz" };
localStorage.setItem("produto1", produto1);
// É armazenado [object Object]

const produto2 = { id: 2, produto: "Arroz" };
const emJSON = JSON.stringify(produto2);
console.log(emJSON); // {"id":2,"produto":"Arroz"}
console.log(typeof produto2); // object
console.log(typeof emJSON);   // string
localStorage.setItem("produto1", emJSON);
// É armazenado {"id":2,"produto":"Arroz"}

const emJSON2 = '{"id":2,"produto":"Arroz"}';
const produto3 = JSON.parse(emJSON2);
console.log(typeof emJSON2);    // string
console.log(typeof produto3);  // object
console.log(produto3.produto); // Arroz
const produto4 = JSON.parse(localStorage.getItem("produto3"));
console.log(produto4);  // 2  

const produtos = [
    { id: 1, produto: "Arroz", preco: 125 },
    { id: 2, produto: "Macarrão", preco: 70 },
    { id: 3, produto: "Pão", preco: 50 },
    { id: 4, produto: "Pudim", preco: 100 }
];
const armazenarLocal = (chave, valor) => {localStorage.setItem(chave, valor)};
    //Armazenar produto por produto
for (const produto of produtos) {
    armazenarLocal(produto.id, JSON.stringify(produto));
}
// ou armazenar array completo
armazenarLocal("listaProdutos", JSON.stringify(produtos));
    
class Produto {
    constructor(obj) {
        this.nome = obj.produto.toUpperCase();
        this.preco = parseFloat(obj.preco);
    }
    somaICMS() {
        this.preco = this.preco * 1.21;
    }
}
//Obtemos a lista de produtos armazenados
const armazenados = JSON.parse(localStorage.getItem("listaProdutos"));
const produtos5 = [];
//Iteramos os armazenados com for...of 
//para transformar todos seus objetos no tipo produto.
for (const objeto of armazenados)
    produtos.push(new Produto(objeto));
//Agora temos o objeto produtos e podemos usar seus métodos
for (const produto of produtos)
    produto.somaICMS();
 
let usuario;
let usuarioEmLS = localStorage.getItem('usuario')
// Se havia algo armazenado, o recuperamos. 
//Se não, pedimos que seja inserido
if (usuarioEmLS) {
    usuario = usuarioEmLS
    console.log(usuario)
} else {
    usuario = prompt('Insira seu nome de usuário')
    localStorage.setItem('usuario', usuario);
}
