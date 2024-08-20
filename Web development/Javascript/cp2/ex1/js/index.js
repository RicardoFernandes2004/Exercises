
let r = document.getElementById('r');


function soma(n1,n2){
    return n1+n2
}  
function subtração(n1,n2){
    return n1-n2
}
function divisao(){
    return n1/n2
}
function multiplicacao(){
    return n1*n2
}
function calcular(){
    let breaker = 0;
    while (breaker != 'não'){
        
        n1 = Number(window.prompt('Digite o primeiro número'));
        n2 = Number(window.prompt('Digite o segundo número'));
        op = window.prompt('Digite a operação');
        switch (op){
            case '+':
                r.innerHTML += `<p>${soma(n1,n2)}</p>`;
                break;
            case '-':
                r.innerHTML += `<p>${subtração(n1,n2)}</p>`;
                break;
            case '*':
                r.innerHTML += `<p>${multiplicacao(n1,n2)}</p>`;
                break;
            case '/':
                r.innerHTML += `<p>${divisao(n1,n2)}</p>`;
                break;
            default:
                break;
        }
        breaker = window.prompt('quer continuar fazendo calculos? (sim/não)');
    }
}
