var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var r1 = document.getElementById('r1');



function soma(){
    let resultado = n1.valueAsNumber + n2.valueAsNumber;
    if(isNaN(resultado))
        r.textContent = '';
    else
        r.textContent = resultado;
    
}  



function subtracao(){
    let resultado1 = n3.valueAsNumber - n4.valueAsNumber;
    if(isNaN(resultado1))
        r1.textContent = '';
    else
        r1.textContent = resultado1;
    
}
    