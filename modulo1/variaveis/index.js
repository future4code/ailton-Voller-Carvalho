/* Exercício de interpretação de código
1- Será impresso b = 10 e depois a = 10 e b = 5.
2- Será impresso a = 10 , b = 10 e c = 10.

3-  let horasTrabalhadas = Number(prompt("Quantas horas você trabalha por dia?"))
    let recebeNoDia = number(prompt("Quanto você recebe por dia?"))
    alert(`Voce recebe ${recebeNoDia/horasTrabalhadas} por hora`)


*/

// Parte 1 - Exercício de escrita de código
let nome;
let idade;

//De antemão , veremos que o valor impresso será undefined pelo fato das variáveis não terem sido inicializadas por valores.
console.log(typeof nome, typeof idade);

nome = prompt("Digite o seu nome:");
idade = Number(prompt("Digite sua idade:"));

// De antemão , as variáveis serão do tipo string e number.
console.log(typeof nome, typeof idade);

console.log("Olá ", nome, " você tem ", idade, "anos.");

// Parte 2
let pergunta1 = console.log("Você está usando jeans hoje?");
let pergunta2 = console.log("Você é liberal?");
let pergunta3 = console.log("Você tem blusa laranja?");

let resposta1 = "NÃO";
let resposta2 = "SIM";
let resposta3 = "NÃO";

console.log("Você está usando jeans hoje?", resposta1);
console.log("Você é liberal", resposta2);
console.log("Você tem blusa laranja ?", resposta3);

// Parte 3
let a = 10;
let b = 25;

// Aqui faremos uma lógica para trocar os valores
c = a;
d = b;
b = c;
a = d;
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

// Desafios
let primeiroNumero = Number(prompt("Digite o primeiro número:"));
let segundoNumero = Number(prompt("Digite o segundo número:"));

let x = primeiroNumero + segundoNumero;
let y = primeiroNumero * segundoNumero;



console.log("O primeiro número somado ao segundo número resulta em:", x);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", y);
