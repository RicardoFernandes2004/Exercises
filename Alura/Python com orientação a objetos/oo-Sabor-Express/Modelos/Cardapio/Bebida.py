from Modelos.Cardapio.Item_cardapio import ItemCardapio


class Bebida(ItemCardapio):
    def __init__(self,nome,preço,tamanho):
        super().__init__(nome,preço)
        self.tamanho = tamanho
        
        
    def __str__(self):
        return self._nome
    
    def aplicar_desconto(self):
        self._preco -= (self._preco * (float(input('digite o desconto: '))))