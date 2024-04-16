var a = 10;
var b = 20;
var opcao = 1;
var resultado = 0;

switch (opcao) {
    case 1 :
        resultado = a+b;
        console.log(resultado);
    case 2 :
        resultado = a-b;
        console.log(resultado);
    case 3 :
        resultado = a/b;
        console.log(resultado);
    case 4 :
        resultado = a*b;
        console.log(resultado);
    default :
        console.log("Opção inválida");
        
};