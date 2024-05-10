// Função que verifica se uma pessoa pode votar com base na ídade, obrigatorio para pessoa de 18 a 70 anos, 
// facultativo para pessoas com 16,17 e acima de 70

function verificarVoto() {
    let idade = document.getElementById('idade').value;
    let resultado = document.getElementById('resultado');
    let idadeRestante = 0

    if (idade >= 18 && idade <= 70) {
        resultado.innerHTML = 'Voto obrigatório';

    } else if (idade == 16 || idade == 17 || idade > 70) {
        resultado.innerHTML = 'Voto facultativo';
        
    } else {
        resultado.innerHTML = 'Você não pode votar ainda!';
        if (idade < 16) {
            for (let index = idade; index < 16; index++) {
                
                idadeRestante = index - idade
            }
            resultado.innerHTML += `<p>faltam ${idadeRestante} anos para você poder votar</p>`;
        }
        
    }
}