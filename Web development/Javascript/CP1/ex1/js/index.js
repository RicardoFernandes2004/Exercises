function verificarNumero(){
    let num = Number(window.prompt(("Insira um número")));
    let res = document.getElementById("res");
    
    if (num > 0) {
        res.innerHTML += '<p>O número é positivo</p>'
    }
    else if(num < 0){
        res.innerHTML += '<p>O número é negativo</p>'
    }
    else{
        res.innerHTML += '<p>O número é igual a 0</p>'
    }

    
}