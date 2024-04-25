#3 - Solicite um nome de usuário e uma senha e use uma estrutura if else para verificar se o nome de usuário e a 
# senha fornecidos correspondem aos valores esperados determinados por você.

email = str(input('Insira seu email: '))
senha = str(input('Insira sua senha: '))
indice = 0
validacao_email = False
validacao_senha = False

while indice < len(email):
    if (email[indice] == '@'):
        validacao_email = True
        break
    if (len(senha) == 8):
        validacao_senha == True
        break
    indice+=1
    
        

if validacao_email == True and validacao_senha == True:
    print('Email e senha validados com sucesso!')
else:
    print('Email ou senha inválidos')