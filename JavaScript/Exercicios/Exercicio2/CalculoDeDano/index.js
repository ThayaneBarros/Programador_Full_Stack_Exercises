const namePerson1 = prompt("What is the name of the first character? ");
const powerAttack = prompt("What is your attack power?");
const namePerson2 = prompt("What is the name of the second character? ");
let lifePoints = prompt("How many life points character2 has?");
const defensePower = prompt(
  "What is the defense power of the second character?"
);
const isShield = prompt("Does the second character have a shield? (Yes/Not)");

let damage = 0;
if (powerAttack > defensePower && isShield === "Not") {
  damage = powerAttack - defensePower;
} else if (powerAttack > defensePower && isShield === "Yes") {
  damage = (powerAttack - defensePower) / 2;
}

lifePoints -= damage;

const result = `${namePerson1}
Power attack: ${powerAttack}\n
${namePerson2}
Life points: ${lifePoints}
Defense power: ${defensePower}
Is Shield: ${isShield}\n`;

alert(namePerson1 + " dealt " + damage + " damage to " + namePerson2);
alert(result);
