const prompt = require("prompt-sync")();

var nome = prompt("Digite seu nome: ");
var valor_compra = parseFloat(Prompt("Digite o valor da sua compra: "));

if (valor_compra < 1000) {
  var desconto = valor_compra * 0.05
} else if (valor_compra <= 5000) {
  desconto = valor_compra * 0.1
} else {
  desconto = valor_compra * 0.15
}

console.log("Valor com desconto: ", desconto)