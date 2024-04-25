# 4 - Solicite ao usuário as coordenadas (x, y) de um ponto qualquer e utilize uma estrutura if elif else 
# para determinar em qual quadrante do plano cartesiano o ponto se encontra de acordo com as seguintes condições:

# Primeiro Quadrante: os valores de x e y devem ser maiores que zero;
# Segundo Quadrante: o valor de x é menor que zero e o valor de y é maior que zero;
# Terceiro Quadrante: os valores de x e y devem ser menores que zero;
# Quarto Quadrante: o valor de x é maior que zero e o valor de y é menor que zero;
# Caso contrário: o ponto está localizado no eixo ou origem.

x = int(input('Insira a coordenada X: '))
y = int(input('Insira a coordenada Y: '))

if  x > 0 and y > 0:
    print('O ponto esta no primeiro quadrante')
elif x < 0 and y >  0:
    print('O ponto esta no segundo quadrante')
elif x < 0 and y <  0:
    print('O ponto esta no terceiro quadrante')
else:
    print('O ponto esta no quarto quadrante ou na origem')
    
