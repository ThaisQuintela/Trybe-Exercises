-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização. Cada animal também possui um cuidador, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE gerente (
    gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE cuidador (
    cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal (
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    especie VARCHAR(50),
    sexo VARCHAR(10),
    idade INT,
    localizacao VARCHAR(50),
    cuidador_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
) ENGINE=InnoDB;