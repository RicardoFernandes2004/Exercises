CREATE TABLE AGENDA
(
	codigo int AUTO_INCREMENT primary key,
    nome varchar(50) not null,
    telefone char(9) not null,
    cpf char(11) not null unique
)