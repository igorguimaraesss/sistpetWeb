const ItemProduto = require("../model/ItemProduto");

module.exports = (database) => {
  database.addItem(
    new ItemProduto({
      produto: "Racao-Cachorro1kg",
      descricao: "Ração para cachorro pequeno",
      itemTipo: {
        nome: "racao",
        descricao: "comida para pets",
        imagem:
          "C:Usersigor0sistpetWebapp-frontsistpetsrcapp\racao_cachorro.webp",
      },
      dataAquisicao: "2022-02-12T08:42:53.001Z",
      precoAquisicao: 99.9,
      departamento: "produtos",
      responsavel: {
        prontuario: "01",
        nome: "Igor Murici",
        telefone: "408-867-5309",
        email: "igor.santos@aluno.ifsp.edu.br",
      },
    })
  );

  database.addItem(
    new ItemPatrimonio({
      patrimonio: "IFSP-BR-002",
      descricao: "Carteira",
      itemTipo: {
        nome: "Sala de aula",
        descricao: "Materiais de sala de aula",
        imagem:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      },
      dataAquisicao: "2016-08-29T09:12:33.001Z",
      precoAquisicao: 999.99,
      departamento: "CAE",
      responsavel: {
        prontuario: "BP0910292",
        nome: "Luiz Gustavo Véras",
        telefone: "408-867-5309",
        email: "gustavo_veras@ifsp.edu.br",
      },
    })
  );

  database.addItem(
    new ItemPatrimonio({
      patrimonio: "IFSP-BR-003",
      descricao: "Bebedouro",
      itemTipo: {
        nome: "Infraestrutura",
        descricao: "Materiais utilizados em corredores e de infraestrutura",
        imagem:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      dataAquisicao: "2016-08-29T09:12:33.001Z",
      precoAquisicao: 999.99,
      departamento: "Almoxarifado",
      responsavel: {
        prontuario: "BP0910292",
        nome: "Luiz Gustavo Véras",
        telefone: "408-867-5309",
        email: "gustavo_veras@ifsp.edu.br",
      },
    })
  );

  database.addItem(
    new ItemPatrimonio({
      patrimonio: "IFSP-BR-004",
      descricao: "Bebedouro",
      itemTipo: {
        nome: "Infraestrutura",
        descricao: "Materiais utilizados em corredores e de infraestrutura",
        imagem:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      dataAquisicao: "2016-08-29T09:12:33.001Z",
      precoAquisicao: 999.99,
      departamento: "Almoxarifado",
      responsavel: {
        prontuario: "BP0910292",
        nome: "Luiz Gustavo Véras",
        telefone: "408-867-5309",
        email: "gustavo_veras@ifsp.edu.br",
      },
    })
  );
};
