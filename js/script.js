/*
const nome = 'Luís Eduardo'
const sobrenome = 'Sabino'
const idade = 19
const peso = 83
const altura = 1.75
let imc = 83 / (altura * altura) 
let AnoDeNascimento = 2023 - idade
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg, tem ${altura} de altura e seu imc é de ${imc}, ele nasceu no ano de ${AnoDeNascimento}`)
*/

/*
let number1 = prompt('Digite um número: ')
let number2 = prompt('Digite outro número: ')
number1 = Number(number1)
number2 = Number(number2)
let resultado = number1 + number2
alert(`O seu resultado foi ${resultado}`)
*/

/*const NomeUsuario = prompt('Digite seu nome:')
document.body.innerHTML += `Seu nome é: ${NomeUsuario} <br/>`
document.body.innerHTML += `Seu nome tem ${NomeUsuario.length} letras <br/>`
document.body.innerHTML += `A segunda letra do seu nome é:${NomeUsuario[1]} <br/> `
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${NomeUsuario.indexOf(('o'))} <br/>`
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${NomeUsuario.lastIndexOf(('o'))} <br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${NomeUsuario.slice (-3)} <br/>`
document.body.innerHTML += `Seu nome com letras maiusculas é: ${NomeUsuario.toUpperCase()} <br/>`
document.body.innerHTML += `Seu nome com letras minusculas é: ${NomeUsuario.toLowerCase()} <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${NomeUsuario.split(" ")}<br/>`
*/

/*
const numero = Number(prompt("Digite um número:"))
const numeroTitulo = document.getElementById('numero-titulo')
numeroTitulo.innerHTML = numero
const Texto = document.getElementById('texto')
Texto.innerHTML = ''
Texto.innerHTML += `<p> Raiz quadrada é: ${numero ** 0.5}</p>`
Texto.innerHTML += `<p>é NaN?: ${Number.isNaN(numero)}</p>`
Texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`
Texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`
Texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
*/

/*const alunos = ['luiz','eduardo', 'sabrina']
alunos.push('caua','sani')
console.log(alunos)
*/


/*function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm(evento){
        evento.preventDefault()

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} 
        ${peso.value} ${altura.value} </p>`
    }
  
    form.addEventListener('submit' , recebeEventoForm)

}
meuEscopo()
*/

/*
const hora = 10

if (hora >= 0 && hora <= 11){
    console.log('Bom dia')
}else if (hora >=12 && hora <= 17){
    console.log('Boa tarde')
}else if(hora >=18 && hora <= 23){

}else{
    console.log('Olá')

}
*/

//Operação ternária
/*
const pontos = 800
const nivelPonto = pontos >= 900 ? 'Passou' : 'Reprovou'
console.log(nivelPonto)
*/

/*
//               0 1 2 3 4 5 6 7 9
const numeros = [1,2,3,4,5,6,7,8,9]
let [p,a] = numeros
console.log(p,a)
*/

/*
const pessoa = {
    nome: 'luis',
    sobrenome: 'sabino',
    endereco:{
        rua: 'do acude',
        numero: 24
    }
}

const {nome, ...resto} = pessoa
console.log(nome,resto)
*/


//Criar número aleatório
/*
const rand = Math.floor(Math.random() * ( max - min ) + min )
console.log(rand)
*/


//////////////////////////////////////DEFINIR PROPRIEDADE
/*
function Produto(nome,preco,estoque){
   this.nome = nome
   this.preco = preco

   Object.defineProperty(this,'estoque',{
    enumerable:true, //mostra a chave
    value: estoque, //valor
    writable:false, //pode alterar
    configurable: false  //configurável
   })
}

const p1 = new Produto('calça',25, 30)
console.log(p1)
*/
//////////////////////////////////////Getters/Setters
/*
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
 */

 //Função contrutora -> molde (classe) PROTOTYPE
 /*
 function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto= () => `${this.nome + this.sobrenome}` 
 }

 Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
 }

 // instância
 const pessoa1 = new Pessoa('Luis', 'S.')
 const pessoa2 = new Pessoa('Wallas', 'S.')

 console.dir(pessoa1)
 console.dir(pessoa2)

*/

////////////TESTANDO OS PROTOTYPES
/*
function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco *(percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco *(percentual / 100))
}

const Produto1 = new Produto('camisa', 10)

const Produto2 = {
    nome: 'calça',
    preco: 60
}

Object.setPrototypeOf(Produto2, Produto.prototype)

// Produto1.desconto(100)
// Produto2.desconto(100)

// Produto1.aumento(100)
// Produto2.aumento(100)

console.log(Produto1)
console.log(Produto2)

*/


//////////////////////////////////////////VALIDANDO CPF
/*
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
        return cpfEnviado.replace(/\D+/g, '');
      }
    });
  }
  
  ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  };
  
  ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
  
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += (regressivo * Number(val));
      regressivo--;
      return ac;
    }, 0);
  
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  };
  
  ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  };
  
  const cpf = new ValidaCPF('070.987.720-03');
  
  if(cpf.valida()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }
*/  


//////////////////////////////////CONTA BANCÁRIA COM POLIMORFISMO
/*
// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
  
  Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
  };
  
  Conta.prototype.verSaldo = function() {
    console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
    );
  };
  
  function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }
  CC.prototype = Object.create(Conta.prototype);
  CC.prototype.constructor = CC;
  
  CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
  }
  CP.prototype = Object.create(Conta.prototype);
  CP.prototype.constructor = CP;
  
  const cc = new CC(11, 22, 0, 100);
  cc.depositar(10);
  cc.sacar(110);
  cc.sacar(1);
  
  console.log();
  
  const cp = new CP(12, 33, 0);
  cp.depositar(10);
  cp.sacar(10);
  cp.sacar(1);
*/  

/////////////////////////////FACTORY FUNCTION COM PROTOTYPE
/*
const falar = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },
  };
  
  const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`);
    },
  };
  
  const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };
  
  const pessoaPrototype = Object.assign({}, falar, comer, beber);
  
  function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome }
    });
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio');
  const p2 = criaPessoa('Maria', 'A.');
  console.log(p2);
*/

////////////////////////////PROMISES
// Promise.all / Promise.race / Promise.resolve / Promise.reject
///FORMA SIMPLIFICADA
/*
const timeout = (tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, tempo)
  })
}

timeout(2000)
.then(function() { // executa o bloco após 2 segundos
  console.log('Passou 2 segundos')
}) 
*/

/*

function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    reject(new Error('Não foi possível recuperar a lista de usuários'))
  })
}

getTodosOsUsuarios()
.catch(err => console.log(err.message)) // Não foi possível recuperar a lista de usuários
*/
///FORMA COMPLICADA SEM ERROR
/*
function rand(min,max){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo){
  return new Promise((resolve,reject)=>{
    if(typeof msg !== 'string') reject('BAD VALUE')
    
    setTimeout(() =>{
      resolve(msg)
    }, tempo)
})
}

esperaAi('Frase 1', rand(1,3))
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase 2', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Frase 3', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
  })
  .then(() =>{
    console.log('Eu serei o ultimo a ser exibido')
  }).catch(e =>{
    console.log('ERROR:',e)
  })
*/

///FORMA COMPLICADA COM ERROR
/*
function rand(min,max){
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg,tempo){
  return new Promise((resolve,reject)=>{
    if(typeof msg !== 'string') reject('BAD VALUE')
    
    setTimeout(() =>{
      resolve(msg)
    }, tempo)
})
}

esperaAi('conexão com o BD', rand(1,3))
  .then(resposta =>{
    console.log(resposta)
    return esperaAi('Buscando dados da BASE', rand(1,3))
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi(22222, rand(1,3))
  }).then(resposta =>{
    console.log(resposta)
  }).then(() =>{
    console.log('Exibe os dados na tela')
  }).catch(e =>{
    console.log('ERROR:',e)
  })
*/
