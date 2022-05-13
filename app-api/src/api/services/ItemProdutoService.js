const ItemProdutoRepository = require("../repositories/ItemProdutoRepository");

module.exports = {
  getAllItemProduto: async function () {
    const data = await ItemProdutoRepository.all();
    return data;
  },

  getItemProdutoById: async function (produtoId) {
    const data = await ItemProdutoRepository.find(produtoId);
    return data;
  },

  addNewItemProduto: async function (itemProduto) {
    const data = await ItemProdutoRepository.create(itemProduto);
    if (data) return { status: "Item criado com sucesso." };
    else return { status: "Não foi possível criar o item" };
  },

  removeItemProdutoById: async function (produtoId) {
    const status = await ItemProdutoRepository.remove(produtoId);
    if (status) return { status: "Item removido com sucesso." };
    else return { status: "Item não encontrado." };
  },
};
