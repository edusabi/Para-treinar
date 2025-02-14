////////////////////////////PROMISES
// Promise.all / Promise.race / Promise.resolve / Promise.reject
///FORMA SIMPLIFICADA

const timeout = (tempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, tempo)
  })
}

timeout(2000)
.then(function() { // executa o bloco após 2 segundos
  console.log('Passou 2 segundos')
}) 




function getTodosOsUsuarios () {
  return new Promise((resolve, reject) => {
    reject(new Error('Não foi possível recuperar a lista de usuários'))
  })
}

getTodosOsUsuarios()
.catch(err => console.log(err.message)) // Não foi possível recuperar a lista de usuários

///FORMA COMPLICADA SEM ERROR

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
