var aluno1 = {
    rm: 554597,
    nome: "Ricardo",
    curso: "Engenharia de Software",
    ativo: true
};

aluno1.datanasc = "02/08/2004";

if (aluno1.ativo == true){
    var estado = "ativo"
} else {
    var estado = "inativo"
};


function imprimirDados(aluno1) {
    console.log(`Nome do Aluno: ${aluno1.nome}`);
    console.log(`Curso do Aluno: ${aluno1.curso}`);
    console.log(`Rm do aluno: ${aluno1.rm}`);
    console.log(`estado de matrícula : ${estado}`);
    console.log(`Data de nascimento do aluno: ${aluno1.datanasc}`);
}

imprimirDados(aluno1);

var torcedor = {
    time: "lakers",
    titulos: 17,
    rebaixamentos: 0,
    brasileiros: null,
    libertadores: null,
}

delete torcedor.brasileiros;

torcedor.mundiais = 17;

console.log(torcedor)