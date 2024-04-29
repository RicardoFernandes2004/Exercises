from ex6 import Livro

livro1 = Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943)
livro1.emprestar()
livro2 = Livro("O Senhor dos Anéis", "J. R. R. Tolkien", 1954)
livro3 = Livro("Dom Quixote", "Miguel de Cervantes", 1605)
livro4 = Livro("O Hobbit", "J. R. R. Tolkien", 1937)
livro5 = Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943)

Livro.verificar_disponibilidade()