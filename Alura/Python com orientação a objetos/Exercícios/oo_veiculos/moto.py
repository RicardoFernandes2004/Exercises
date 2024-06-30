from veiculo import Veiculo

class Moto(Veiculo):
    def __init__(self, marca, modelo, tipo):
        super().__init__(marca, modelo)
        self.tipo = tipo
        
    def __str__(self):
        return f'Marca: {self.marca}, Modelo: {self.modelo}, Tipo: {self.tipo}, Estado: { "Desligado" if self._ligado == False else "Ligado"}'
    
    def ligar(self):
        self._ligado = True
        print('Moto ligada')