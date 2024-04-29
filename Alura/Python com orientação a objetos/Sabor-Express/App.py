import os

restaurantes = [{'nome':'praça', 'categoria':'Japonesa', 'Ativo': False}, 
                {'nome':'Pizza suprema', 'categoria':'Pizza', 'Ativo':True},
                {'nome':'cantina', 'categoria':'Italiana', 'Ativo': False}]

def exibir_subtitulo(texto):
    '''Essa função é responsavel por exibir o subtitulo concatenado por asterísticos'''
    os.system("cls")
    linha = '*' * (len(texto))
    print(linha)
    print(texto)
    print(linha)
    print()
def exibir_nome_programa():
    '''Essa função é responsavel por exibir o nome do programa'''
    print("""
░██████╗░█████╗░██████╗░░█████╗░██████╗░  ███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
╚█████╗░███████║██████╦╝██║░░██║██████╔╝  █████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
░╚═══██╗██╔══██║██╔══██╗██║░░██║██╔══██╗  ██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
██████╔╝██║░░██║██████╦╝╚█████╔╝██║░░██║  ███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░╚═╝░░╚═╝  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░\n""")
def exibir_opcoes():
    '''Essa função é responsavel por exibir as opções'''
    print("1. Cadastrar restaurante")
    print("2. Listar restaurante")
    print("3. Alternar estado do restaurante")
    print("4. Sair\n")
def finalizar_app():
    '''Essa função é responsavel por finalizar o aplicativo'''
    exibir_subtitulo("finalizando programa")
def cadastrar_novo_restaurante():    
    '''Essa função é responsavel por cadastrar um novo restaurante'''
    exibir_subtitulo("Cadastro de novos restaurantes")
    nome_do_restaurante = input("Digite o nome do restaurante que deseja cadastrar: ")
    categoria = input(f"Digite a categoria do restaurante {nome_do_restaurante}: ")
    dados_do_restaurante = {'nome': nome_do_restaurante, 
                            'categoria': categoria, 
                            'Ativo': False}
    restaurantes.append(dados_do_restaurante)
    print(f"Restaurante {nome_do_restaurante} cadastrado com sucesso!")
    voltar_ao_menu() 
    
def alternar_estado_restaurante():
    exibir_subtitulo('Alterar estado do restaurante')
    nome_restaurante = input('Digite o nome do restaurante que deseja alternar o estado: ')
    restaurante_encontrado = False
    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['Ativo'] = not restaurante['Ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['Ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
    if not restaurante_encontrado:
        print(f'Não foi encontrado nenhum restaurante com o nome {nome_restaurante}')
    
    voltar_ao_menu()
    
def listagem_restaurantes():
    '''Essa função é responsavel por listar os restaurantes'''
    exibir_subtitulo("Você escolheu a opção 2. Listar restaurante")
    print(f'{'Nome do restaurante'.ljust(22)} | {'Categoria'.ljust(22)} | {'estado'.ljust(22)}')
    for restaurante in restaurantes:
        nome_restaurante = restaurante['nome']
        categoria = restaurante['categoria']
        estado = restaurante['Ativo']
        print(f"- {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | Desativado" if estado == False else f"- {nome_restaurante.ljust(20)} | {categoria.ljust(20)} | Ativado")
    voltar_ao_menu()
def opcao_invalida():
    '''Essa função é responsavel por exibir uma opção inválida e retornar ao menú'''
    print("Opção inválida\n")
    voltar_ao_menu()
def escolher_opcao():
    '''Essa função é responsavel pela escolha das opções'''
    
    opcao_escolhida = input(f"Escolha uma opção: ")
    match  opcao_escolhida:
        case '1': # Cadastro de Restaurantes
            cadastrar_novo_restaurante()
        case '2': # Listagem de Restaurantes]
            listagem_restaurantes()   
        case '3': # Ativação de Restaurantes
            alternar_estado_restaurante()
        case '4':  # Saída do Programa
            finalizar_app()
        case  _:   # Opções Inválidas
            opcao_invalida()  
            voltar_ao_menu()         
def voltar_ao_menu():
    input("Digite uma tecla para voltar ao menu: ")
    main()


def main():
    os.system('cls')
    exibir_nome_programa()
    exibir_opcoes()
    escolher_opcao()

    


if __name__ ==  "__main__":
    main()