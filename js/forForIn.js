//Estrutura for - clássico

for(let i = 0 ;i <=100; i++){
    console.log(i)
}



const frutas = ['Maça','Acerola','Morango','Melão','Melancia','Jaca','Laranja','Uva',]
for(let i = 0 ; i < frutas.length ; i++){
console.log(`Indice ${i} ` , frutas[i])
}


////////////////////////////////////////////////////////////Exercicio com for

const elementos = [
    {tag: 'p', texto:'Qualquer coisa'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'section', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag,texto} = elementos[i]
    let TagCriada = document.createElement(tag)
    TagCriada.innerHTML = texto
    div.appendChild(TagCriada)
}

container.appendChild(div)
//document.appendChild('p')


//////////////////////////////////////////////////////Estrutura for in = ler indices ou chaves do objeto
//Array

const frutas = ['Maça','Uva','Pera']
for(let index in frutas){
    console.log(frutas[index])
}


//objeto

const pessoa = {
    nome:'luiz',
    sobrenome:'pessoa',
    idade: 30
}



for(let chave in pessoa){
    console.log(chave,pessoa[chave])
}


/////////////////////////////////////////////////////Estrutura for of = ler o valor em si


const frutas = ['Maça','Uva','Pera']
for (let valor of frutas){
console.log(valor)
}


//Exercicio 2

const ePaisagem = (larg,altr) => larg > altr

console.log(ePaisagem(1000,500))


//Exercicio 3

function FizzBuzz(numero){
 
    if (typeof numero !== 'number')return numero
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'
    return numero
}

for(let  i = 0; i <= 100; i++ ){
    console.log(i, FizzBuzz(i))
}
