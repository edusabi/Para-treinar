//////////////////////////////////////////////////função while e do while
//while

function random(min, max) {
    const r = Math.random() * (max - min) + min; 
    return Math.floor(r);
  }
  
  
  let rand = random(100, 0);
  
  while (rand !== 10) {
    rand = random(100, 0);
    console.log(rand);
  }

//Exercicio 1



///////////////////////////////////////////////////////do while


let result = ''
let i = 0;

do {
  i = i + 1;
  result = result + ' ' + i;
} while (i < 5);

console.log(result);

