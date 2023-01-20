/*Programa funciona como um conversos de medidas. O programa 
pede por um valor em metros e então dar a opção de escolher para 
qual unidade de medida esse valor deve ser convertido.*/

const measure = prompt("Insira uma medida em metros:");
const choise = prompt(
  "Para qual unidade de medida deseja converter?\n1.milímetro (mm)\n2.centímetro (cm)\n3.decímetro (dm)\n4.decímetro (dm)\n5.hectômetro (hm)\n6.quilômetro (km)"
);

switch (choise) {
  case "1":
    alert("Resultado: " + measure + "m = " + measure * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + measure + "m = " + measure * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + measure + "m = " + measure * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + measure + "m = " + measure / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + measure + "m = " + measure / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + measure + "m = " + measure / 1000 + "km");
    break;
  default:
    resul = "Opção inválida";
}
