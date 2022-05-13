class ItemProduto {
  constructor(itemDados) {
    // this.patrimonio = itemDados.patrimonio;
    // this.descricaoItem = itemDados.descricaoItem;
    // this.tipo = itemDados.tipo;
    // this.dataAquisicao = typeof itemDados.dataAquisicao == Date ?
    //                              itemDados.dataAquisicao : new Date(itemDados.dataAquisicao)
    // this.precoAquisicao = itemDados.precoAquisicao;
    // this.departamento = itemDados.departamento
    // this.responsavel = itemDados.responsavel
    console.log(itemDados);
    this.produto = itemDados.produto;
    this.descricao = itemDados.descricao;
    this.itemTipo =
      typeof itemDados.itemTipo === "object"
        ? itemDados.itemTipo
        : {
            nome: itemDados.itemTipo,
            descricao: "None",
            imagem:
              "C:Usersigor0sistpetWebapp-frontsistpetsrcapp\racao_cachorro.webp",
          };
    this.dataAquisicao =
      typeof itemDados.dataAquisicao == Date
        ? itemDados.dataAquisicao
        : new Date(itemDados.dataAquisicao);
    this.precoAquisicao = itemDados.precoAquisicao;
    this.departamento = itemDados.departamento;
    this.responsavel =
      typeof itemDados.responsavel === "object"
        ? itemDados.responsavel
        : {
            prontuario: "01",
            nome: itemDados.responsavel,
            telefone: "408-867-5309",
            email: "igor.santos@aluno.ifsp.edu.br",
          };
  }
}

module.exports = ItemProduto;
