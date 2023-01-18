const prompt = require("prompt-sync")();

num1 = parseFloat(prompt("Digite o primeiro número: "))
num2 = parseFloat(prompt("Digite o segundo número: "))

if (num1 > 0 && num2 > 0) {

  if (num1 % 2 == 0 && num2 % 2 == 0) {
    console.log("Os dois numeros são pares")
  } else if (num1 % 2 != 0 && num2 % 2 != 0) {
    console.log("Os dois numeros são ímpares")
  } else {
    console.log("Um par e um ímpar")
  }

} else {
  console.log("Existe pelo menos um numero 0 ou negativo")
}