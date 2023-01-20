const word = prompt("Informe uma palavra:");

let wordBackwards = "";
for (let i = word.length - 1; i >= 0; i--) {
  wordBackwards += word[i];
}

let resul = "";
if (word === wordBackwards) {
  resul = word + "  é um palíndromo!";
} else {
  resul = word + " não é um palíndromo!\n\n" + word + "!==" + wordBackwards;
}

alert(resul);
