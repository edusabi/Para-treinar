///////////////////////////METODO SPLICE/////////////////////////////////

//splice(qual indice,quantos apagar a partir desse indice, nome/numero para add depois)


const nomes = ['edu','sani','wallas','caua']
const nomes2 = ['kev','bina','samu','lu','lili']
nomes.splice(2,2,'luis','ednaldo')
nomes2.splice(-2,2,'eduardo','eduarda')
const nomes3 = [...nomes,...nomes2]
console.log(nomes)




//////////////////////////////FILTER/////////////////////////////////////


const numeros = [1,2,3,4,5,6,7,8,9,10,11,112,13,14,15,16,17,18,19,20]

const numberFilter = numeros.filter(valor => valor < 10)
console.log(numberFilter)



const pessoas = [
    {nome:'luis' , idade:13},
    {nome:'rosana' , idade:83},
    {nome:'roberto' , idade:73},
    {nome:'luciana' , idade:43},
    {nome:'wallace' , idade:23},
    {nome:'damiao' , idade:93}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length <= 4 )
const pessoasVelhas = pessoas.filter(obj => obj.idade >= 80)
const pessoasQueTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasQueTerminaComA)



//////////////////////////////MAP/////////////////////////////////////


const pessoas = [
    {nome:'luis' , idade:13},
    {nome:'rosana' , idade:83},
    {nome:'roberto' , idade:73},
    {nome:'luciana' , idade:43},
    {nome:'wallace' , idade:23},
    {nome:'damiao' , idade:93}
]

const paraString = pessoas.map(obj => obj.idade * 2)
console.log(paraString)


//////////////////////ADICIONAR COISAS USANDO MAP


const addIds = pessoas.map(function(valor, indice){
    valor.id = (indice + 1)
    return valor
})

console.log(addIds)


///////////////////////COMO NÃO MODIFICAR O ARRA/OBJETO PRINCIPAL


const pessoas = [
    {nome:'luis' , idade:13},
    {nome:'rosana' , idade:83},
    {nome:'roberto' , idade:73},
    {nome:'luciana' , idade:43},
    {nome:'wallace' , idade:23},
    {nome:'damiao' , idade:93}
]

const addIds = pessoas.map(function(valor, indice){
    const newObj = {...valor}
    newObj.indice = indice + 1
    return newObj
})
console.log(pessoas)
console.log(addIds)



//////////////////////////////REDUCE/////////////////////////////////////


const numeros = [10,20,30,40,50,60,70,80,90]

const total = numeros.reduce(function(acumulador,valor){
    acumulador = acumulador + valor
    console.log(acumulador,valor)
    return acumulador
},10)
console.log(total)




const pessoas = [
    {nome: 'rafa' , idade:52},
    {nome: 'mamae' , idade:97},
    {nome: 'edu' , idade:23},
    {nome: 'xoxa' , idade:32},
    {nome: 'bidu' , idade:45},
    {nome: 'madu' , idade:15},
    {nome: 'wallas' , idade:78},
    {nome: 'Joana' , idade:100}
]

const pessoaMaisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador
return valor
})
console.log(pessoaMaisVelha)


////////////////////JUNTANDO REDUCE MAP FILTER////////////////////////// 


const number = [1,2,3,4,5,6,7,8,9,10]
const numberPar = number.filter(valor => valor % 2 === 0)
.map(valor =>valor * 2  )
.reduce((acumulador,valor) => acumulador += valor)
console.log(numberPar)



const pessoa1 = new Object()
pessoa1.nome = 'edu'
pessoa1.sobrenome = 'sabi'
pessoa1.idade = 19
pessoa1.falarNome = function(){
    return (`${this.nome} está falando`)
}

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade 
}

for (let chave in pessoa1){
console.log(pessoa1[chave])
}
