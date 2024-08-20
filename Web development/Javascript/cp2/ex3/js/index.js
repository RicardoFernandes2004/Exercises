// Este ano teremos votação para prefeitos e vereadores. Crie um 
// programa capaz de simular a votação, levando em consideração 5 candidatos 
// para prefeito. A votação deve continuar até que o administrador da simulação 
// encerre a simulação. Criar uma função para cada atividade:  
let res = document.getElementById('res')

function candidato1(votoInput){
    return res.innerHTML += `<p>Voto para o candidato ${votoInput} </p>`
}
function candidato2(votoInput){
    return res.innerHTML += `<p>Voto para o candidato ${votoInput} </p>`
}
function candidato3(votoInput){
    return res.innerHTML += `<p>Voto para o candidato ${votoInput} </p>`
}
function candidato4(votoInput){
    return res.innerHTML += `<p>Voto para o candidato ${votoInput} </p>`
}
function candidato5(votoInput){
    return res.innerHTML += `<p>Voto para o candidato ${votoInput} </p>`
}

function votacao(){
    let voto = true
    while (voto == true) {
        voto = Number(window.prompt('Digite o número do candidato: (0 para desligar a simulação'))
        if (voto == 0) {
            break
        }else if(voto == 1){
            candidato1(voto)
        }else if(voto == 2){
            candidato2(voto)
        }else if(voto == 3){
            candidato3(voto)
        }else if(voto == 4){
            candidato4(voto)
        }else if(voto == 5){
            candidato5(voto)
        }else{
            res.innerHTML += `<p>Numero inválido</p>`
        }
        
        
        
    }
    

    
}