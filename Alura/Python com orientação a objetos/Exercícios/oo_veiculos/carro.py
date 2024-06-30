from veiculo import Veiculo

class Carro(Veiculo):
    def __init__(self, marca, modelo, portas, cor):
        super().__init__(marca, modelo)
        self.portas = portas
        self.cor = cor
        
    def __str__(self):
        return f'Marca: {self.marca}, Modelo: {self.modelo}, Portas: {self.portas}, Estado: { "Desligado" if self._ligado == False else "Ligado"}, Cor: {self.cor}'
    
    def ligar(self):
        self._ligado = True
        print('Carro ligado')