from Modelos.Avaliacao import Avaliacao
from Modelos.Cardapio.Item_cardapio import ItemCardapio
class Restaurante:
    restaurantes = []
    
    # faz com que o objeto ao ser chamado requira de um nome e uma categoria, o metodo do append no init ja manda o objeto criado para a lista restaurantes
    def __init__(self, nome, categoria):
        self._nome = nome.title()
        self._categoria = categoria.upper()
        self._ativo = False
        self._avaliacao = []
        self._cardapio = []
        Restaurante.restaurantes.append(self)
    
    # faz com que o objeto seja impresso como uma string quando chamado
    def __str__(self):
        return f'{self._nome} | {self._categoria}'
    
    @classmethod
    def listar_restaurantes(cls):
        print(f'{'Nome do Restaurante'.ljust(25)} | {'Categoria'.ljust(25)} | {'Avaliação'.ljust(25)} | Ativo ')
        for restaurante in cls.restaurantes:
            print(f'{restaurante._nome.ljust(25)} | {restaurante._categoria.ljust(25)} | {str(restaurante.media_avaliacao).ljust(25)} | {restaurante.ativo}')
            
    # o property está fazendo com que o Ativo esteja sendo lido de outra maneira quando chamado, ou seja
    # ele retornará outra coisa envés do True ou False
    
    @property
    def ativo(self):
        return '✅' if self._ativo else '❎'
    
    def alternar_estado(self):
        self._ativo = not self._ativo
        
    def receber_avaliacao(self, cliente, nota):
        avaliacao = Avaliacao(cliente, nota)
        self._avaliacao.append(avaliacao)
        
    @property
    def media_avaliacao(self):
        if not self._avaliacao: 
            return 'Ainda não há avaliações'
        
        soma_das_notas = sum(avaliacao._nota for avaliacao in self._avaliacao)
        divisor_das_notas = len(self._avaliacao)
        media = round(soma_das_notas/divisor_das_notas,1)
        
        if media > 5:
            return 5.0
        else:
            return media
    
    def adicionar_no_cardapio(self,item):
        if isinstance(item,ItemCardapio):
            self._cardapio.append(item)
            
    @property
    def exibir_cardapio(self):
        print(f'Cardapio do Restaurante {self._nome}\n')
        for i,item in enumerate(self._cardapio,start=1):
            if hasattr(item,'descricao'):
                mensagem_prato = f'{i}. Nome: {item._nome}, Preço: {item._preco}, Descrição: {item.descricao}'
                print(mensagem_prato)
            elif hasattr(item, 'tamanho'):
                mensagem_bebida = f'{i}. Nome: {item._nome}, Preço: {item._preco}, Tamanho: {item.tamanho}'
                print(mensagem_bebida)
            
    
# restaurante_praça = Restaurante('praça','gourmet')
# restaurante_praça.alternar_estado()
# restaurante_cha = Restaurante('totto Land','chá')

# # Puxando um metodo próprio da classe Restaurante
# Restaurante.listar_restaurantes()
