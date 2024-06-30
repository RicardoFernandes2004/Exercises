from Modelos.Restaurante import Restaurante
from Modelos.Cardapio.Bebida import Bebida
from Modelos.Cardapio.Prato import Prato
from Modelos.Cardapio.Sobremesa import Sobremesa


restaurante_praca = Restaurante('Praça', 'Gourmet')
bebida_suco = Bebida('Suco de maça',10.00,'grande')
bebida_suco.aplicar_desconto()
prato_paozinho = Prato('Pãozinho',2.00,"O melhor pão da cidade")
prato_paozinho.aplicar_desconto()
sobremesa_pudim = Sobremesa('Pudim',20,"Grande")
restaurante_praca.adicionar_no_cardapio(bebida_suco)
restaurante_praca.adicionar_no_cardapio(prato_paozinho)
restaurante_praca.adicionar_no_cardapio(sobremesa_pudim)

def main():
    restaurante_praca.exibir_cardapio

if __name__ == '__main__':
    main()