class Carro:
    carros = []
    def __init__(self, marca, modelo, ano, cor, preco):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.cor = cor
        self.preco = preco
        Carro.carros.append(self)
        
    def __str__(self):
        return f'{self.marca} {self.modelo} {self.ano} {self.cor} {self.preco}'
    
    def listagem_carros():
        for carro in Carro.carros:
            print(f'Marca: {carro.marca}')
            print(f'Modelo: {carro.modelo}')
            print(f'Ano: {carro.ano}')
            print(f'Cor: {carro.cor}')
            print(f'Preço: {carro.preco}')

Gol = Carro('Volkswagen', 'gol', '2000', 'preto', 12049)
           
Carro.listagem_carros()