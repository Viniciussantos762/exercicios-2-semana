const prompt = require("prompt-sync")();

nome = prompt("Digite o nome do aluno: ");
nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));
nota3 = parseFloat(prompt("Digite a terceira nota: "));

media = (nota1 + nota2 + nota3) / 3;

if (media >= 6 ){
  resultado = "aprovado";
}else{
  resultado = "Reprovado";
}

console.log("Nome: ", nome);
console.log("Média: ", media);
console.log("Resultado: ", resultado);