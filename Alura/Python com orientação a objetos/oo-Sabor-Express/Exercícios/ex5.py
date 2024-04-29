class ContaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo
        self.ativo = False
        
    def __str__(self):
        return f'Olá {self.titular}, Seu saldo é de R${self.saldo}'
    
    def ativar_conta(self):
        self.ativo = not self.ativo
    
    
    
conta1 = ContaBancaria('João', 1000)
conta1.ativar_conta()
print(conta1.ativo)

conta2 = ContaBancaria('John', 2000)
print(conta2)

class ClienteBanco:
    def __init__(self, nome, idade, conta):
        self.nome = nome
        self.idade = idade
        self.conta = conta
        self.ativo = False
        self.devendo = False
    
    def __str__(self):
        return f'Olá {self.nome}, você tem {self.idade} anos e sua conta é {self.conta}'
        


cliente1 = ClienteBanco('Joseph',49,4998382)

print(cliente1)