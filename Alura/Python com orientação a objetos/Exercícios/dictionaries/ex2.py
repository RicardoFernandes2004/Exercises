# 2 - Utilizando o dicionário criado no item 1:

# Modifique o valor de um dos itens no dicionário (por exemplo, atualize a idade da pessoa);
# Adicione um campo de profissão para essa pessoa;
# Remova um item do dicionário.

info = {'nome: ':'Jose',
        'idade: ': 18,
        'cidade: ':'São Paulo',
        'Vivo': True
        }


info['Profissão'] = 'Programador'
info['idade: '] = 20
info.pop('Vivo')

print(info)