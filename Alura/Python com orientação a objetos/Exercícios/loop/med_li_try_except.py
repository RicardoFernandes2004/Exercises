# 7 - Construa um código que calcule a média dos valores em uma lista. 
# Utilize um bloco try-except para lidar com a divisão por zero, caso a lista esteja vazia.

lista = []

for i in range(10):
    try:
        lista.append(int(input("Digite um número: ")))

    except:
        print("Digite um número inteiro")

try:
    media = sum(lista) / len(lista)

except ZeroDivisionError:
    print("A lista está vazia")

except:
    print("Erro desconhecido")

else:
    print(f"A média dos valores é {media}")

finally:
    print("Fim do programa")