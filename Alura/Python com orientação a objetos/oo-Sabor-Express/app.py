from Modelos.Restaurante import Restaurante

restaurante_praca = Restaurante('Praça', 'Gourmet')
restaurante_praca.receber_avaliacao('Gui', 10)
restaurante_praca.receber_avaliacao('Laís', 8)
restaurante_praca.receber_avaliacao('Ricardo', 10)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()