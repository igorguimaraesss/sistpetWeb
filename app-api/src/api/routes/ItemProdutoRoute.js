// const routes = require("express").Router();
const { Router } = require("express");

const ItemProdutoController = require("../controllers/ItemProdutoController");

const routes = Router();

routes.get("/produto", ItemProdutoController.listAll);
routes.get("/produto/:produto_id", ItemProdutoController.get);
routes.post("/produto", ItemProdutoController.add);
routes.delete("/produto/:produto_id", ItemProdutoController.remove);

module.exports = routes;
