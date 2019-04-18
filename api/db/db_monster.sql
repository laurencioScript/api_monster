CREATE DATABASE monster_pi;

CREATE TABLE Monstro(
    idmonstro integer generated always as IDENTITY primary key not null,
    nome varchar(100) NOT NULL,
    tipo varchar(100) NOT NULL,
    desafio varchar(10) NOT NULL,
    xp integer NOT NULL,
    tamanho varchar(30) NOT NULL,
    tendencia char(2) NOT NULL,
    classe_armadura integer NOT NULL,
    pontos_de_vida varchar(15) NOT NULL

);


CREATE TABLE Atributos(
    idatributos integer generated always as IDENTITY primary key not null,
    forca integer NOT NULL,
    destreza integer NOT NULL,
    constituicao integer NOT NULL,
    inteligencia integer NOT NULL,
    sabedoria integer NOT NULL,
    carisma integer NOT NULL,
    monstroid integer
);



CREATE TABLE Deslocamento(
    iddeslocamento integer generated always as IDENTITY primary key not null,
    escalada numeric NOT NULL,
    voo numeric NOT NULL,
    escavacao numeric NOT NULL, 
    deslocamento numeric NOT NULL,
    natacao numeric NOT NULL,
    monstroid integer
);


CREATE TABLE Tracos(
    idtracos integer generated always as IDENTITY primary key not null,
    traco text NOT NULL,
    monstroid integer
);


CREATE TABLE Idioma(
    ididioma integer generated always as IDENTITY primary key not null,
    idioma varchar(50) NOT NULL,
    monstroid integer
);


CREATE TABLE Sentidos(
    idsentindos integer generated always as IDENTITY primary key not null,
    sentindo varchar(50) NOT NULL,
    alcance numeric not null,
    monstroid integer    
);


CREATE TABLE Resistencia_Dano(
    idresistenciadano integer generated always as IDENTITY primary key not null,
    resistencia varchar(100) NOT NULL,
    monstroid integer
);

CREATE TABLE Teste_Resistencia(
    idtesteresistencia integer generated always as IDENTITY primary key not null,
    tipo varchar(100) not null,
    valor int not null,
    monstroid integer
);

CREATE TABLE Pericia(
    idpericia integer generated always as IDENTITY primary key not null,
    tipo varchar(100) not null,
    valor int not null,
    monstroid integer
);



CREATE TABLE Vulnerabilidade(
    idvulnerabilidade integer generated always as IDENTITY primary key not null,
    vulnerabilidade varchar(100) NOT NULL,
    monstroid integer
);


CREATE TABLE Imunidade(
    idimunidade integer generated always as IDENTITY primary key not null,
    imunidade varchar(50) NOT NULL,
    monstroid integer    
);



CREATE TABLE Acao(
    idacao integer generated always as IDENTITY primary key not null,
    acao text NOT NULL,
    monstroid integer
);



CREATE TABLE Reacao(
    idreacao integer generated always as IDENTITY primary key not null,
    reacao text NOT NULL,
    monstroid integer
);


CREATE TABLE Acao_Lendaria(
    idacaolendaria integer generated always as IDENTITY primary key not null,
    acao_lendaria text NOT NULL,
    monstroid integer
);



CREATE TABLE Equipamento(
    idequipamento integer generated always as IDENTITY primary key not null,
    equipamento varchar(300) NOT NULL,
    monstroid integer
);



ALTER TABLE Atributos ADD CONSTRAINT FK_Atributos_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Deslocamento ADD CONSTRAINT FK_Deslocamento_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Tracos ADD CONSTRAINT FK_Tracos_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Idioma ADD CONSTRAINT FK_Idioma_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Sentidos ADD CONSTRAINT FK_Sentidos_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Resistencia_Dano ADD CONSTRAINT FK_ResistenciaDano_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Teste_Resistencia ADD CONSTRAINT FK_TesteResistencia_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Pericia ADD CONSTRAINT FK_Pericia_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Vulnerabilidade ADD CONSTRAINT FK_Vulnerabilidade_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Imunidade ADD CONSTRAINT FK_Imunidade_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Acao ADD CONSTRAINT FK_Acao_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Reacao ADD CONSTRAINT FK_Reacao_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Acao_Lendaria ADD CONSTRAINT FK_Acao_Lendaria_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

ALTER TABLE Equipamento ADD CONSTRAINT FK_Equipamento_Monstro FOREIGN KEY (monstroid) REFERENCES Monstro(idmonstro);

insert into  Monstro VALUES  ((SELECT COUNT(*) FROM Monstro)+1,'Danilo','',0,0,'','',0,0);

insert into Monstro (null,'Danilo','',0,0,'','',0,0)
insert Atributos (null,0,0,0,0,0,0,());
insert Deslocamento (null,0,0,0,0,0,())

insert Tracos (null,'',())
insert Pericia (null,'',,())
insert Teste_Resistencia (null,'',,())
insert Sentindos (null,'',())

insert Acao (null,'',())
insert Reacao (null,'',())
insert Acao_Lendaria (null,'',())
insert Equipamento (null,'',())


insert Idioma (null,'',())
insert Resistencia (null,'',())
insert Vulnerabilidade (null,'',())
insert Imunidade (null,'',())
