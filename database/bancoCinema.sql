#CRIAÇÃO BANCO E TABELAS
create database cinema;
use cinema;

CREATE TABLE tbl_usuario (
	id_usuario int primary key auto_increment, #não precisa ser add valor
    nome_usuario varchar(45) not null,
	senha varchar(45) not null,
	email varchar(45) not null,
    tipo_usuario enum('administrador', 'comum') default 'comum',
    criado_em datetime default now(),
    deletado boolean default false
);

create table tbl_ator (
	id_ator INT primary key auto_increment,
	nome_ator VARCHAR(45) not null, #campo obrigatório
	sexo VARCHAR(1) not null,
	dt_nascimento DATE not null
);

create table tbl_diretor (
	id_diretor INT primary key auto_increment,
	nome_diretor VARCHAR(45) not null,
	nacionalidade VARCHAR(10) not null,
	dt_nascimento DATE not null
);

create table tbl_genero (
	id_genero INT primary key auto_increment,
	genero VARCHAR(45)
);

create table tbl_filme (
	id_filme INT primary key auto_increment,
	nome_filme_PT VARCHAR(45) not null,
	nome_filme_EN VARCHAR(45),
	ano_lancamento INT(4) not null,
	duracao INT(3) not null,
	fk_id_genero int not null,
	fk_id_diretor int not null,
	foreign key (fk_id_genero) references tbl_genero(id_genero) on delete cascade,
	foreign key (fk_id_diretor) references tbl_diretor(id_diretor) on delete cascade
);

create table tbl_filme_has_tbl_ator (
	fk_id_filme INT,
	fk_id_ator INT,
	foreign key (fk_id_filme) references tbl_filme(id_filme) on delete cascade,
	foreign key (fk_id_ator) references tbl_ator(id_ator) on delete cascade,
	primary key(fk_id_ator, fk_id_filme),
	personagem VARCHAR(45) #INCLUI ESSE CAMPO PARA RELACIONAR ATOR COM PERSONAGEM
);

#ALTERAÇÕES

alter table tbl_diretor add sexo varchar(1) not null;
alter table tbl_diretor modify nacionalidade varchar(45);
alter table tbl_filme drop nome_filme_EN;
alter table tbl_filme change nome_filme_PT nome_filme varchar(45);
alter table tbl_filme_has_tbl_ator rename tbl_filme_e_ator;


insert into tbl_diretor (nome_diretor, nacionalidade, dt_nascimento, sexo)				
	values	("Steven Spielberg", "Estados Unidos",'1946-12-18','M'),
			("James Cameron", "Canada", '1954-08-16', 'M' ),
			("José Padilha" , "Brasil",	'1967-08-01', 'M'),
			("George Lucas"	,"Estados Unidos",	'1944-05-14', 'M'),
			("Alan Rickman", "Inglaterra", '1946-02-21', 'M'),
			("Fernando Meirelles" , "Brasil", '1965-11-09', 'M');
  
  #INSERTS
  
INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento)	
	VALUES ("Andrew Garfield",	"M"	,'1983-08-20'),
			("Sandra Bullock",	"F"	,'1964-06-26'),
			("Will Smith", "M", '1968-09-25'),
			("Harrison Ford", "M",'1942-07-13'),
			("Hugh Jackman",	"M"	, '1968-10-12'),
			("Angelina Jolie",	"F"	, '1975-06-04'),
			("Keanu Reeves",	"M"	, '1964-09-02'),
			("Jennifer Lawrence",	"F"	, '1990-08-15'),
			("Sylvester Stallone",	"M"	, '1946-07-06'),
			("James Mcavoy",	"M"	, '1979-04-21'),
			("Brad Pitt",	"M"	, '1963-12-18'),
			("Leonardo Dicaprio",	"M"	, '1974-11-11'),
			("Vin Diesel",	"M"	, '1967-07-18'),
			("Johnny Depp",	"M"	, '1963-06-09'),
			("Robin Williams",	"M"	, '1951-07-21'),
			("Robert Downey Jr.",	"M"	, '1965-04-04'),
			("Patrick Stewart",	"M"	, '1940-07-13'),
			("Jackie Chan",	"M"	, '1954-04-07'),
			("Jennifer Aniston", "F" , '1969-02-11'),
			("Jim Carrey",	"M"	, '1962-01-17'),
			("Scarlett Johansson",	"F"	, '1984-11-22'),
			("Megan Fox",	"F"	, '1986-05-16'),
			("Ben Stiller",	"M"	, '1965-11-30'),
			("Emma Stone",	"F"	, '1988-11-06'),
			("Wesley Snipes",	"M"	, '1962-06-30'),
			("Wagner Moura",	"M"	, '1976-06-27');


#delete from tbl_genero where genero = "Ação";
#delete from tbl_filme_e_ator where fk_id_ator = 7;  #Antes
#delete from tbl_ator where id_ator = 7; 
select * from tbl_filme_e_ator;
select * from tbl_genero;

insert into tbl_genero (genero)
	values	( "Terror"),
			("Ação"),
			("Comedia"),
			("Drama"),
			("Suspense"),
			("Ficção"),
			("Romance"),
			("Animação"),
            ("Futurista");



insert into tbl_filme ( nome_filme, ano_lancamento, duracao, fk_id_genero, fk_id_diretor)									
	values( "Viva: A Vida é Uma Festa	", 	2017, 105, 8, 5	),
	( "Logan", 2017, 137, 2, 1	),
	( "Um Sonho de Liberdade", 	1995, 142, 4, 5	),
	( "Matrix", 1999, 150, 6, 1	),
	( "Jumanji", 1996, 104, 3, 6	),
	( "Cidade de Deus", 2002, 135, 2, 3	),
	( "O Resgate do Soldado Ryan", 	1998, 170, 2, 6	),
	( "Extraordinário", 2017, 113, 4, 5	),
	( "O Poderoso Chefão", 1972, 178, 2, 2	),
	( "Forrest Gump	",1994, 142, 7, 1	),
	( "Truque de Mestre", 2013, 125, 2, 4	),
	( "Fragmentado",2017, 117, 4, 6	),
	( "Avatar", 2009, 162, 6, 2	),
	( "O Preço do Amanhã	", 	2011, 109, 2, 3	),
	( "O Senhor dos Anéis: O Retorno do Rei", 	2003, 200, 6, 5	),
	( "Toy Story", 	1995, 141, 8, 2	),
	( "Star Wars: Os Últimos Jedi", 2017, 152, 6, 4	),
	( "O Menino do Pijama Listrado", 2008, 94, 4, 1	),
	( "O Lobo de Wall Street", 	2013, 181, 4, 6	),
	( "A Hora do Rush", 1998, 98, 3, 5	),
	( "Piratas do Caribe - Maldição do Perola Negra	", 	2003, 143, 2, 4	),
	( "Passengeiros", 2016, 116, 2, 1	),
	( "Beleza Oculta", 2016, 97, 4, 2	),
	( "It - A Coisa", 2017, 134, 1, 3	),
	( "Rocky V", 1990, 111, 4, 4	),
	( "Titanic", 1997, 195, 7, 4	),
	( "Vingadores 4", 2019, 150, 2, 2	),
	( "Velozes e Furiosos 8", 	2017, 136, 2, 6	),
	( "Transformers", 2007, 150, 2, 4	),
	( "Ilha do Medo", 2010, 139, 5, 1	);

insert into tbl_filme_e_ator (fk_id_filme, fk_id_ator, personagem)
	values	(2, 5, "Logan"),
			(4, 7, "Neo"),
			(28, 13, "Dominic Toretto"),
			(19, 12, "Jordan Belfort"),
			(26, 12, "Jack Dawson"),
			(25, 9, "Rocky Balboa"),
			(22, 8, "Aurora Lane"),
			(27, 21, "Viúva Negra"),
			(29, 22, "Mikaela Banes"),
			(27, 16, "Homem de Ferro"),
			(21, 14, "Jack Sparrow"),
			(20, 18, "Lee"),
			(24, 10, "Bill Denbrough"),
			(30, 12, "Teddy Daniels"),
			(23, 3, "Claire"),
			(7, 13, "Adrian Caparzo"),
			(12, 10, "Kevin Wendell");
            
select * from tbl_filme_e_ator;
UPDATE tbl_ator SET nome_ator='Elisabeth Olsen', dt_nascimento='1989-02-16'  WHERE id_ator = 18;
UPDATE tbl_ator SET sexo='M' WHERE id_ator = 21 OR id_ator = 24;

select * from tbl_usuario;
select * from tbl_ator;
select * from tbl_diretor;
select * from tbl_filme;
select * from tbl_genero;