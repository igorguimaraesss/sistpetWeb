const ItemProduto = require("./model/ItemProduto");

// Classe que serve de banco de dados temporário. Será substituído pelo ORM.
class Banco {
  constructor() {
    this.items = [];
  }

  getAllItems() {
    return this.items;
  }

  addItem(novoItem) {
    if (novoItem instanceof ItemProdutoo) {
      this.items.push(novoItem);
    } else {
      throw Error("DB: Objeto não é do tipo ItemProduto");
    }
  }

  findByProduto(produto) {
    return this.items.filter((item) => item.produto === produto)[0];
  }

  removeByProduto(produto) {
    let item = this.items.splice(
      this.items.findIndex((item) => item.produto === produto),
      1
    );
    return item;
  }
}

let banco = new Banco();

module.exports = banco;
