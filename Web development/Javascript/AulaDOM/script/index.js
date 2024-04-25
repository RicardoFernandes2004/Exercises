var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var op = document.getElementById('operacao');
var r = document.getElementById('r');


function soma(){
    let resultado = n1.valueAsNumber + n2.valueAsNumber;
    if(isNaN(resultado)){
        r.innerHTML = '';
    }else{
        r.innerHTML = resultado;
    }    
}  
function subtração(){
    let resultado = n1.valueAsNumber - n2.valueAsNumber;
    if(isNaN(resultado)){
        r.innerHTML = '';
    }else{
        r.innerHTML = resultado;
    }    

}
function divisao(){
    let resultado = n1.valueAsNumber / n2.valueAsNumber;
    if(isNaN(resultado)){
        r.innerHTML = '';
    }else{
        r.innerHTML = resultado;
    }    
}
function multiplicacao(){
    let resultado = n1.valueAsNumber * n2.valueAsNumber;
    if(isNaN(resultado)){
        r.innerHTML = '';
    }else{
        r.innerHTML = resultado;
    }    
}
function calcular(){
    switch (op.value) {
        case "+":
            soma()
            break;

        case "-":

            subtração()
            break;
    
        case "*":

            multiplicacao()
            break;

        case "/":

            divisao()
            break;

        default:
            break;
    }

}
