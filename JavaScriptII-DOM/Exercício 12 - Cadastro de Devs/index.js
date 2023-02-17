function createLabel(text, textForHtml) {
  const newLabel = document.createElement("label");
  newLabel.innerText = text;
  newLabel.htmlFor = textForHtml;

  return newLabel;
}

function createInput(
  textId,
  textValue,
  textName,
  type = "text",
  placeholder = ""
) {
  const newInput = document.createElement("input");
  newInput.id = textId;
  newInput.value = textValue;
  newInput.name = textName;
  newInput.type = type;
  newInput.placeholder = placeholder;

  return newInput;
}

const form = document.getElementById("devForm");
const btnAddNewTech = document.getElementById("addNewTech");
const developers = [];
let qtdTech = 0;

btnAddNewTech.addEventListener("click", function (ev) {
  ev.preventDefault();

  const ul = document.getElementById("listTech");
  const newTech = document.createElement("li");

  newTech.id = "tech-" + qtdTech;
  newTech.className = "tech";

  const label = createLabel("Nome: ", "techName-" + qtdTech);
  const input = createInput("techName-" + qtdTech, "", "techName");

  const nameRadioExp = "techExp-" + qtdTech;
  const expLabel = createLabel(" Experiência: ");

  const id1 = "expRadio-" + qtdTech + ".1";
  const expInput1 = createInput(id1, "02years", nameRadioExp, "radio");
  const expLabel1 = createLabel("0-2 anos", id1);

  const id2 = "expRadio-" + qtdTech + ".2";
  const expInput2 = createInput(id2, "34years", nameRadioExp, "radio");
  const expLabel2 = createLabel("3-4 anos", id2);

  const id3 = "expRadio-" + qtdTech + ".3";
  const expInput3 = createInput(id3, "5+years", nameRadioExp, "radio");
  const expLabel3 = createLabel("5+ anos ", id3);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remover";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    ul.removeChild(newTech);
  });

  newTech.append(
    label,
    input,
    expLabel,
    expInput1,
    expLabel1,
    expInput2,
    expLabel2,
    expInput3,
    expLabel3,
    removeButton
  );
  ul.appendChild(newTech);

  qtdTech++;
});

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const fullname = document.getElementById("nameDev");
  const inputRows = document.querySelectorAll(".tech");

  let technologies = [];
  inputRows.forEach(function (row) {
    const techName = document.querySelector(
      "#" + row.id + ' input[name="techName"]'
    ).value;
    const techExp = document.querySelector(
      "#" + row.id + ' input[type="radio"]:checked'
    ).value;
    technologies.push({ name: techName, exp: techExp });
  });

  const newDev = { fullname: fullname.value, technologies: technologies };
  developers.push(newDev);
  alert("Dev cadastrado com sucesso!");

  fullname.value = "";
  inputRows.forEach(function (row) {
    row.remove();
  });
});
