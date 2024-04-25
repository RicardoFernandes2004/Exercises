function bigger_than(){
    let n1 = Number(window.prompt('Insira o primeiro numero: '));
    let n2 = Number(window.prompt('Insira o segundo numero: '));
    let res = document.getElementById('res');

    if (n1 > n2) {
        res.innerHTML = `O numero ${n1} é maior que o numero ${n2}`;
    }else if(n1 < n2){
        res.innerHTML = `O numero ${n2} é maior que o numero ${n1}`

    } else {
        res.innerHTML = `Os numeros são iguais`
    }

}

