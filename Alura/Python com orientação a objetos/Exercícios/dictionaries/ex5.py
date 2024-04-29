#5 - Escreva um código que conte a frequência de cada palavra em uma frase utilizando um dicionário.
def contar_palavras(frase):
    # Dividir a frase em palavras
    palavras = frase.split()

    # Inicializar um dicionário para armazenar a contagem de palavras
    contagem_palavras = {}

    # Iterar sobre cada palavra na lista de palavras
    for palavra in palavras:
        # Verificar se a palavra já está no dicionário
        if palavra in contagem_palavras:
            # Se estiver, incrementar a contagem
            contagem_palavras[palavra] += 1
        else:
            # Se não estiver, adicionar a palavra ao dicionário com contagem 1
            contagem_palavras[palavra] = 1

    # Retornar o dicionário com a contagem de palavras
    return contagem_palavras

# Exemplo de uso
frase = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit consequuntur quia numquam corrupti sed, maxime illum exercitationem enim perferendis pariatur, deleniti provident mollitia ab esse, quis quisquam distinctio iste minus nemo cum dolor? Mollitia laborum nam illum quos cumque? Quas id nulla blanditiis at harum, beatae, repudiandae rem perferendis excepturi, aspernatur exercitationem? Debitis dignissimos praesentium quo accusantium aperiam saepe placeat aliquid tempora inventore mollitia necessitatibus earum distinctio doloribus cupiditate molestiae aut, sapiente, consequuntur tempore quas iusto quod. Deleniti, itaque tenetur eum optio voluptate ullam sed esse eos odio debitis delectus molestias corrupti praesentium porro inventore doloremque, nobis assumenda. Porro, sed.'
frequencia_palavras = contar_palavras(frase)
print(frequencia_palavras)
