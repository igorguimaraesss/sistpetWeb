const database = require("./database/database");
const ItemProduto = require("./database/model/ItemProduto");
const ItemRepoSeed = require("./database/seed/ItemProdutoSeed");

class ItemProdutoRepository {
  constructor() {
    // Quando definirmos o ORM, precisaremos adicionar o model aqui.
    // this.model = ItemPatrimonioModel;
    ItemRepoSeed(database);
    this.database = database;
  }

  async create(itemProduto) {
    const newItem = new ItemProduto(itemProduto);
    database.addItem(newItem);
    return newItem;
  }

  async find(itemProduto) {
    return database.findByProduto(itemProduto);
  }

  async all() {
    return database.getAllItems();
  }

  async remove(produtoId) {
    return database.removeByProduto(produtoId);
  }
}

module.exports = new ItemProdutoRepository();
