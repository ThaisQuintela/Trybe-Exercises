-- Caso não tenha feito ainda, refaça o banco de dados albuns por conta própria, como está descrito na seção " Hora de mexer os dedos ".
CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE artistas (
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE estilo_musical (
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20)
) ENGINE=InnoDB;

CREATE TABLE album (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    valor DECIMAL(5, 2) NOT NULL,
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artistas(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id)
) ENGINE=InnoDB;

CREATE TABLE musica (
    musica_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    duracao INT,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;