var frutas = ['banana', 'maca', 'abacaxi', 'pera'];

console.log('---- Frutas ----');
console.log('-- quantidade de elementos em frutas: ' + frutas.length);
console.log('-- incluindo a melancia no array');
frutas.push('melancia');
console.log('-- nova quantidade de elementos: ' + frutas.length);
console.log('itens armazenados em frutas');
console.log(frutas);

var veiculos = ['polo', 'virtus', 'nivus', 'tcross', 'jetta'];

console.log('---- Veículos ----');
console.log('-- imprimindo um veículo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log('-- Elementos no array de veículos :' + veiculos.length);
console.log('-- incluindo veículo no array');
veiculos.push('golf');
console.log('-- nova quantidade de elementos no array: ' + veiculos.length);

console.log('---- Comando de repetição For ----');

for(i=0; i < veiculos.length; i++){
    console.log('Veiculo: '+ veiculos[i] );
}