-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT M.id, M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais (domestic_sales).
SELECT M.id, M.title, BO.domestic_sales, BO.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
WHERE BO.domestic_sales < BO.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT M.title, BO.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
ORDER BY BO.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.id, T.name, T.location, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT T.id, T.name, T.location, M.title, M.director, M.year, M.length_minutes
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
	-- INNER JOIN:
SELECT M.title
FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice BO
ON M.id = BO.movie_id
WHERE BO.rating > 7.5;
	-- SUBQUERY:
SELECT title
FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice
  WHERE rating > 7.5
);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem as avaliações dos filmes lançados depois de 2009.
	-- INNER JOIN:
SELECT BO.rating
FROM Pixar.BoxOffice AS BO
INNER JOIN Pixar.Movies AS M
ON M.id = BO.movie_id AND M.year > 2009;
	-- SUBQUERY:
SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id FROM Pixar.Movies
  WHERE year > 2009
);

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT T.name, T.location
FROM Pixar.Theater AS T
WHERE EXISTS (
	SELECT M.theater_id FROM Pixar.Movies AS M
  WHERE T.id = M.theater_id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT T.name, T.location
FROM Pixar.Theater AS T
WHERE NOT EXISTS (
	SELECT M.theater_id FROM Pixar.Movies AS M
  WHERE T.id = M.theater_id
);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT *
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id AND BO.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director AND t1.title <> t2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
	-- INNER JOIN:
SELECT M.title
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BO
ON M.id = BO.movie_id
	AND	M.length_minutes > 110
  AND (BO.domestic_sales + BO.international_sales) >= 500000000;
	-- SUBQUERY: 
SELECT M.title
FROM Pixar.Movies AS M
WHERE M.id IN (
	SELECT BO.movie_id FROM Pixar.BoxOffice AS BO
  WHERE (BO.domestic_sales + BO.international_sales) >= 500000000
)
AND M.length_minutes > 110;
