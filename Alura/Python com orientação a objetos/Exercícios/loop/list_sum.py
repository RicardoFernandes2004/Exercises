# 6 - Crie uma lista de números e utilize um loop for para calcular a soma de todos os elementos. 
# Utilize um bloco try-except para lidar com possíveis exceções.

lista = []

for i in range(10):
    try:
        lista.append(int(input("Digite um número: ")))

    except:
        print("Digite um número válido")


print(sum(lista))