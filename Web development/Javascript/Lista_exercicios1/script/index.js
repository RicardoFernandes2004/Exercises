let contarnum = 0
let contador = document.getElementById('contador')

function clicou(){
    let nome = window.prompt('Qual é o seu nome?')
    alert(`Olá, ${nome}!`)
}

function variavel(){
    let nome = window.prompt('Qual é o seu nome?')
    let res = document.getElementById('resultado')
    res.innerHTML = `Olá, ${nome}!`
}

function soma(){
    let n1 = Number(window.prompt('Digite o primeiro número:'))
    let n2 = Number(window.prompt('Digite o segundo número:'))
    let res = document.getElementById('resultado')
    res.innerHTML = `A soma dos números é ${n1 + n2}`
}

function media(){
    let n1 = Number(window.prompt('Digite a primeira nota:'))
    let n2 = Number(window.prompt('Digite a segunda nota:'))
    let n3 = Number(window.prompt('Digite a terceira nota:'))
    let res = document.getElementById('resultado')
    res.innerHTML = `A média das notas é ${(n1 + n2 + n3) / 3}`
}

function contar(){
    contarnum++
    contador.innerHTML = `Você clicou ${contarnum} vezes`
}

function zerar(){
    contarnum = 0
    contador.innerHTML = null
}

function evento1(){
    resp.innerHTML += '<p>Você clicou no botão 1</p>'
}

function evento2(){

    resp.innerHTML += '<p>Você clicou no botão 2</p>'
}

function evento3(){
    resp.innerHTML += '<p>Você clicou no botão 3</p>'
}

function evento4(){

    resp.innerHTML += '<p>Você clicou no botão 4</p>'
}