//////////////////////////HERANÇA

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
   
  Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
  };
  Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
  };
   
  function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
  }
  Camiseta.prototype = Object.create(Produto.prototype);
  Camiseta.prototype.constructor = Camiseta;

  Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100) )
  }

  function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco)
    this.material = material
    

    Object.defineProperty(this,'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
  }
  Caneca.prototype = Object.create(Produto.prototype)
  Caneca.prototype.constructor = Caneca

  const produto = new Produto('gen', 110)
  const camiseta = new camiseta('regata', 8, 'preta')
  const Caneca = new Caneca('Caneca', 15, 'vidro',10)
  console.log(produto)
  console.log(camiseta)
  console.log(Caneca)
  

  
// 705.484.450-52 070.987.720-03

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
