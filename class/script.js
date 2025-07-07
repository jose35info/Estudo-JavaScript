class Pessoa{
    nome;
    peso;
    altura;
    // Construtor da classe Pessoa
    constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }
    // Método para calcular o IMC
    calcularIMC(){
      return  this.peso / (this.altura * this.altura);
    }
    // Método para verificar se a pessoa está acima do peso
    classificarIMC(){
        const imc = this.calcularIMC();
        if (imc <= 18.5) {
            return "Abaixo do peso";
        }else if (imc <= 24.9){
            return "Peso normal";
        }else if (imc <= 29.9){
            return "Sobrepeso";
        }else if(imc <= 34.9){
            return "Obesidade grau 1";
        }else if(imc <= 39.9){
            return "Obesidade grau 2";
        }else if(imc >= 40){
            return "Obesidade grau 3";
        }
    }
}
document.getElementById("formPessoa").addEventListener("submit",function(event){
    event.preventDefault();// Previne o envio do formulário
    //
    // Obtendo os valores dos campos do formulário
    const nome= document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);


// Instanciando objetos da classe Pessoa
const pessoa1 = new Pessoa(nome, peso, altura);
const pessoa2 = new Pessoa("Maria", 65, 1.60);

// Exibindo o resultado
  const resultado = `${pessoa1.nome} tem IMC: ${pessoa1.calcularIMC().toFixed(2)} – ${pessoa1.classificarIMC()}`;
  document.getElementById("resultado").textContent = resultado;
console.log(`${pessoa2.nome} tem IMC: ${pessoa2.calcularIMC().toFixed(2)}`);
console.log(`${pessoa2.nome} está classificado como: ${pessoa2.classificarImc()}`);
})