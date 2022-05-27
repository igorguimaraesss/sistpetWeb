const produtoService = require("../services/produtoService");

module.exports = {
  listAll: function (req, res) {
    res.statusCode = 200;
    produtoService.getAllItemProduto().then((items) => {
      res.set("Content-Type", "application/json");
      res.send(JSON.stringify(items));
    });
  },

  add: function (req, res) {
    ItemProdutoService.addNewItemProduto(req.body)
      .then((status) => {
        res.statusCode = 201;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status));
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        res.set("Content-Type", "application/text");
        res.send(error.message);
      });
  },

  get: function (req, res) {
    const produtoId = req.params.produto_id;
    ItemProdutoService.getItemProdutoById(produtoId).then((item) => {
      if (item) {
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(item));
      } else {
        res.statusCode = 404;
        res.set("Content-Type", "application/json");
        res.send({
          status: `Não foi possível encontrar o item para ${produtoId}.`,
        });
      }
    });
  },

  remove: function (req, res) {
    ItemProdutoService.removeItemProdutoById(req.params.produto_id).then(
      (status) => {
        res.statusCode = 200;
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(status));
      }
    );
  },
};
