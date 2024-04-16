import math


print("QUANDO O 0 É ADICIONADO ELE AUTOMATICAMENTE PARTE PARA FAZER A CONTA, USE 0 APENAS QUANDO TERMINAR DE ADICIONAR OS VALORES")

num_a_calcular = [1,]
numAdd = float(input("insira seu numero "))
while numAdd != 0: 
    num_a_calcular.append(numAdd)
    numAdd=float(input("insira o proximo valor "))
    
soma = sum(num_a_calcular[1:])
divisor = len(num_a_calcular[1:])

med = soma / divisor

print(med)

