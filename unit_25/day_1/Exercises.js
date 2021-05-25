// Exercícios de Fixação
db.transactions.aggregate([{ $match: { from: "Dave America" } }]).pretty();
db.transactions.aggregate([{ $match: { $or: [ { value: { $gt: 700, $lt: 6000 } }, { to: "Lisa Simpson" }] } }]).pretty();
db.transactions.aggregate([{ $match: { value: { $gt: 1000 } } }, { $limit: 3 }]).pretty();

db.transactions.aggregate([{ $group: { _id: "$bank" }}]).pretty();
db.transactions.aggregate([{ $group: { _id: "$bank", total: { $sum: "$value" }, count: { $sum: 1 } } }]).pretty();
db.transactions.aggregate([{ $group: { _id: null, total: { $sum: "$value" } } }]).pretty();
db.transactions.aggregate([{ $group: { _id: "$bank", total: { $sum: "$value" } } }, { $match: { "total": { $gt: 1000 } } }]).pretty();

db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "from", as: "client" }}]).pretty();
db.clients.aggregate([{ $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "received" } }, { $limit: 4 }]).pretty();
db.clients.aggregate([{ $match: { State: "Florida" } }, { $lookup: { from: "transactions", localField: "name", foreignField: "to", as: "received" } }]).pretty();

// Exercícios
// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".
db.clientes.aggregate([{ $match: { sexo: "MASCULINO" } }]).pretty();

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
db.clientes.aggregate([{ $match: { $and: [{ sexo: "FEMININO" }, { dataNascimento: { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') } }] } }]).pretty();

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5.
db.clientes.aggregate([{ $match: { $and: [{ sexo: "FEMININO" }, { dataNascimento: { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') } }] } }, { $limit: 5 }]).pretty();

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.aggregate([{ $match: { "endereco.uf": "SC" } }, { $group: { _id: "SC", count: { $sum: 1 } } }]);

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total.
db.clientes.aggregate([{ $group: { _id: "$sexo", total: { $sum: 1 } } }]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total.
db.clientes.aggregate([{ $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } }]);

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída.
db.clientes.aggregate([{ $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } }, { $project: { _id: 0, "estado": "$_id.uf", "sexo": "$_id.sexo", "total": 1 } }]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
db.vendas.aggregate([{ $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } }, { $sort: { "total": -1 } }, { $limit: 5 }]).pretty();

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.
db.vendas.aggregate([{ $match: { dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') } } }, { $group: { _id: "$clienteId", total: { $sum: "$valorTotal" } } }, { $sort: { "total": -1 } }, { $limit: 10 }]).pretty();

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
db.vendas.aggregate([{ $group: { _id: "$clienteId", count: { $sum: 1 } } }, { $match: { count: { $gte: 5 } } }, { $group: { _id: null, clientes: { $sum: 1 } } }, { $project: { _id: 0 } }]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.
db.vendas.aggregate([{ $match: { dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-31') } } }, { $group: { _id: "$clienteId", count: { $sum: 1 } } }, { $match: { count: { $lt: 3 } } }, { $count: "clientes" }]);

// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020.
db.vendas.aggregate([{ $match: { dataVenda: { $gte: ISODate('2020-01-01') } } }, { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "dados" } }, { $unwind: "$dados" }, { $group: { _id: "$dados.endereco.uf", totalVendas: { $sum: 1 } } }, { $sort: { totalVendas: -1 } }, { $limit: 3 }, { $project: { _id: 0, uf: "$_id", totalVendas: 1 } }]);

// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf.
db.vendas.aggregate([{ $match: { dataVenda: { $gte: ISODate('2019-01-01'), $lte: ISODate('2019-12-31') } } }, { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "dados" } }, { $unwind: "$dados" }, { $group: { _id: "$dados.endereco.uf", totalVendas: { $sum: 1 }, mediaVendas: { $avg: "$valorTotal" } } }, { $sort: { "_id": 1 } }]);
