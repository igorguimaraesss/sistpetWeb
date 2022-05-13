// const ItemPatrimonioRepository = require("../repositories/ItemPatrimonioRepository");
const produtoService = require("../services/produtoService");

module.exports = {
  /* Perceba que o objeto response, do sequelize, 
       é recebprodutoServiceido aqui. Importante para responder a 
       requisição de forma assíncrona. 
    */
  listAll: function (req, res) {
    //Blocking operation (Não fazer)
    //return ItemPatrimonioRepository.all()
    // console.log(ItemPatrimonioRepository.all());
    res.statusCode = 200; // Status HTTP para OK;
    produtoService.getAllItemProduto().then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },

  // handler para adcionar novo item no banco
  add: function (req, res) {
    ItemProdutoService.addNewItemProduto(req.body)
      .then((status) => {
        res.statusCode = 201; // Status HTTP para created;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status));
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500; //Status HTTP para erro interno
        res.set("Content-Type", "application/text");
        res.send(error.message);
      });
  },

  // handler para recuperar um item por patrimonio
  get: function (req, res) {
    const produtoId = req.params.produto_id;
    ItemProdutoService.getItemProdutoById(
      // req.params acessa os parâmetros passados na path definidos como :nomeparam
      produtoId
    ).then((item) => {
      if (item) {
        res.statusCode = 200; // Status HTTP para OK;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(item));
      } else {
        res.statusCode = 404; // Status HTTP para No Found;
        res.set("Content-Type", "application/json");
        res.send({
          status: `Não foi possível encontrar o item para ${produtoId}.`,
        });
      }
    });
  },

  // handler para remover um item pelo seu código de patrimonio
  remove: function (req, res) {
    ItemProdutoService.removeItemProdutoById(
      // req.params acessa os parâmetros passados na path definidos como :nomeparam no router
      req.params.produto_id
    ).then((status) => {
      res.statusCode = 200; // Status HTTP para Operação bem sucedida "No content";
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(status));
    });
  },
};
