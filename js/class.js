////////////////////////////USANDO CLASS
/*
class Pessoa{
    constructor(nome, sobrenome) {
      this.nome = nome
      this.sobrenome = sobrenome
    }

    falar(){
     console.log(`${this.nome} está falando!`)
    }
    
    comer(){
        console.log(`${this.nome} está comendo!`)
        
    }
    
    beber(){
        console.log(`${this.nome} está bebendo!`)
        
    }
}

const pessoa1 = new Pessoa('luis', 'Eduardo')
console.log(pessoa1.comer())
*/

/*
class Passos{
    constructor(nome){
        this.nome = nome    
        this.passo = 0
        }

      andar(){
        this.passo += 2
      }
      
      voltar(){
        this.passo -= 2
      }
}

const person1 = new Passos('Edu')
person1.andar()
console.log(person1)
*/


////////////////////////////////VALIDANDO CPF COM CLASS
/*
// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      });
    }
  
    éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.éSequência()) return false;
      this.geraNovoCpf();
  
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
  let validacpf = new ValidaCPF('070.987.720-03');
  // validacpf = new ValidaCPF('999.999.999-99');
  
  if (validacpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }
*/  
