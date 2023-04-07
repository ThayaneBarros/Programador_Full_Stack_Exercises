function addContact() {
  const contactSection = document.getElementById("contacts-list");

  const div = document.createElement("div");
  div.className = "contact";

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");

  createElement(ul, "Nome: ", "text", "fullname");
  createElement(ul, "Telefone: ", "text", "phone");

  const addressLi = document.createElement("li");
  addressLi.innerHTML = '<label for="address">Endereço: </label>';
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.name = "address";
  addressInput.id = "address";
  addressLi.appendChild(addressInput);
  ul.append(addressLi, document.createElement("br"));

  div.append(h3, ul);
  contactSection.append(div);
}

function createElement(tag, innerTextElement, typeElement, nameElement) {
  const nameLi = document.createElement("li");
  nameLi.innerText = innerTextElement;
  const nameInput = document.createElement("input");
  nameInput.type = typeElement;
  nameInput.name = nameElement;
  nameLi.appendChild(nameInput);
  tag.append(nameLi, document.createElement("br"));
}

function removeContact() {
  const contactSection = document.getElementById("contacts-list");

  const classContact = document.getElementsByClassName("contact");

  contactSection.removeChild(classContact[classContact.length - 1]);
}
