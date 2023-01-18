const prompt = require("prompt-sync")();

angulo1 = parseFloat(prompt("Digite o valor do primeiro ângulo: "));
angulo2 = parseFloat(prompt("Digite o valor do segundo ângulo: "));
angulo3 = parseFloat(prompt("Digite o valor do terceiro ângulo: "));


if (angulo1 + angulo2 + angulo3 == 180 ) {

  if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
    console.log("Triangulo acutângulo")
  } else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    console.log("Triangulo Retângulo")
  }else{
    console.log("Triangulo Obtusângulo")
  }

}else {
  console.log("Não é um triângulo")
}