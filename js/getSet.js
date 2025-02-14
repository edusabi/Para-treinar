//////////////////////////////////////Getters/Setters

function Produto(nome,preco,estoque){
    this.nome = nome
    this.preco = preco
 let estoquePrivado = estoque
    Object.defineProperty(this,'estoque',{
     enumerable:true, //mostra a chave
     configurable:true, //valor
     get: function(){
        return estoquePrivado
     },
     set: function(valor){
        if(typeof valor !== 'number'){
            console.log('Bad value')
        return
    }
    estoquePrivado = valor

     }
    })
 }
 
 const p1 = new Produto('calça',25, 30)
 p1.estoque = 'O valor que eu quero'
 console.log(p1.estoque)
 
