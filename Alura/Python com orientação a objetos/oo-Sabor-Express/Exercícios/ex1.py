class Musica:
    lista_musicas = []
    def __init__(self,nome,artista,duracao):
        
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.lista_musicas.append(self)
        
    def __str__(self):
        return f'{self.nome} - {self.artista} - {self.duracao}'
    
    def listar_musicas():
        for i in Musica.lista_musicas:
            print(f'{i.nome} | {i.artista} | {i.duracao}')
    
Turn_it_into_Love = Musica('Turn it into Love','Wink','3:28')

Super_chance = Musica('Super Chance','1986 OMEGA TRIBE','4:34')


Otoko_to_Onna = Musica('Otoko to Onna','Junko Ohashi','4:46')

Musica.listar_musicas()

