class ProdutoService {
  constructor() {
    this._http = new HttpService();
  }

  obterProdutos() {
    return this._http
      .get("http://localhost:3000/ref/assets/pro.js")
      .then((produtos) =>
        produtos.map((p) => new Produto(p.imagem, p.descricao, p.valor))
      )
      .catch((erro) => {        
        window.alert("Não foi possível obter os produtos");
      });
  }
}
