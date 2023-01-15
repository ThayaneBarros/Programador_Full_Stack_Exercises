/* Programa que permite inserir o nome e a velocidade de dois veículos e exibe
na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades
são iguais se este for o caso) */

const nameVel1 = prompt("What is the name of the vehicle? ");
const vel1 = prompt("Enter the value of the first speed: ");
const nameVel2 = prompt("What is the name of the vehicle? ");
const vel2 = prompt("Enter the value of the second speed: ");

let resul;
if (vel1 > vel2) {
  resul = `${nameVel1} it's faster`;
} else if (vel1 < vel2) {
  resul = `${nameVel2} it's faster`;
} else {
  resul = `${nameVel1} and ${nameVel2} have the same speed`;
}

alert(resul);
