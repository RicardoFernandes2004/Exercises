/*
Questão 02: Escreva um programa que calcule o salário líquido de um grupo de 
funcionários. Utilize o comando while para realizar os cálculos. 
SB – Salário Bruto 
IR – Imposto de Renda 
FGTS – Taxa Fundo de Garantia do Tempo de Serviço 
INSS – Taxa Seguro Social 
SL – Salário Líquido 
IR → se SB for menor que 2800 – Isento. 
se SB for maior ou igual a 2800 e menor que 5000 – 15% do SB 
se SB maior ou igual a 5000 – 27% do SB 
FGTS → 8% do SB 
INSS → 20% do SB 
SL = SB – IR – FGTS - INSS 
Implemente uma função para cada cálculo e uma função que chame as demais.  

*/
let res = document.getElementById('res')

function calcularImpostoRenda(salarioBruto) {
    let impostoRenda = 0;
    if (salarioBruto < 2800) {
        impostoRenda = 0;
    } else if (salarioBruto >= 2800 && salarioBruto < 5000) {
        impostoRenda = salarioBruto * 0.15;
    } else {
        impostoRenda = salarioBruto * 0.27;
    }
    return impostoRenda;
}
function calcularFgts(salarioBruto){
    let fgts = salarioBruto * 0.08;
    return fgts;
}
function calcularInss(salarioBruto){
    let inss = salarioBruto * 0.20;
    return inss;
}

function calcularSalarioLiquido(salarioBruto) {
    let grupoFuncionarios = 0
    let comparador = window.prompt('quantos funcionários vc quer calcular o salário? ')
    while (grupoFuncionarios < comparador) {
        let salarioBruto = window.prompt('Digite o salário do funcionário: ');
        let impostoRenda = calcularImpostoRenda(salarioBruto);
        let fgts = calcularFgts(salarioBruto);
        let inss = calcularInss(salarioBruto);
        let salarioLiquido = salarioBruto - impostoRenda - fgts - inss;
        res.innerHTML += `<p>${salarioLiquido}</p>`;
        grupoFuncionarios += 1
    }

    
}