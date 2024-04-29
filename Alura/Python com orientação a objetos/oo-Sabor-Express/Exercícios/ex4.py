class Pessoa:
    def __init__(self, nome='', idade=0, profissao=''):
        self.nome = nome
        self.idade = idade
        self.profissao = profissao
    
    def __str__(self):
        return f'{self.nome} tem {self.idade} anos, {self.profissao}'
    
    def aniversario(self):
        self.idade += 1
        
    @property
    def saudacao(self):
       if self.profissao:
           return f'Sou {self.nome}, tenho {self.idade}, Trabalho como {self.profissao}' 
       else:
            return f'Sou {self.nome}, tenho {self.idade}'
    
joao = Pessoa(nome='João',idade=25, profissao='programador')

print(joao.saudacao)