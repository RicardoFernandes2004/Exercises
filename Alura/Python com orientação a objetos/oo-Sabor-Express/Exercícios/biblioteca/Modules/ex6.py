class Livro:
    livros_disponibilidade = []
    
    def __init__(self, titulo, autor, ano_publicado):
        self._titulo = titulo
        self._autor = autor
        self._ano_publicado = ano_publicado
        self._disponivel = True
        Livro.livros_disponibilidade.append(self)
        
        
       
    def __str__(self):
        return f'Nome do livro: {self._titulo.ljust(25)} | Autor: {self._autor.ljust(25)} | Ano Publicado: {str(self._ano_publicado).ljust(25)}'
    
    def emprestar(self):
        self._disponivel = not self._disponivel
    
    @classmethod
    def verificar_disponibilidade(cls):
        container = int(input("Qual ano você procura? "))
        for livro in cls.livros_disponibilidade:
            if livro._disponivel == True and livro._ano_publicado == container:
                print(f'O livro {livro._titulo} do ano {container} está disponível' if livro._disponivel == True else f'O livro {livro._titulo} do ano {container} está emprestado')
            else:
                print(f'O livro {livro._titulo} do ano {container} está emprestado' if livro._disponivel == False else f'O livro {livro._titulo} não é do ano {container}')
        
            
        

