from Modelos.Cardapio.Item_cardapio import ItemCardapio

class Sobremesa(ItemCardapio):
    def __init__(self,nome,preco,tamanho):
        super().__init__(nome,preco)
        self.tamanho = tamanho
        
        
        
    def __str__(self):
        return self._nome
    
    def aplicar_desconto(self):
        self._preco -= (self._preco * (float(input('digite o desconto: '))))