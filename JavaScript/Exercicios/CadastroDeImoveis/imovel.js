let answer = "";
const houses = [];

do {
  answer = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
      "Total de Imóveis: " +
      houses.length +
      "\n\nEscolha uma opção:" +
      "\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (answer) {
    case "1":
      const house = {};

      house.nameOwner = prompt("Informe o nome do proprietário do imóvel:");
      house.qtdBedrooms = prompt("Quantos quartos possui o imóvel?");
      house.qtdBathroom = prompt("Quantos banheiros possui o imóvel?");
      house.isGarage = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmation = confirm(`Salvar este imóvel\n
  Proprietário: ${house.nameOwner}
  Quartos: ${house.qtdBedrooms}
  Banheiros: ${house.qtdBathroom}
  Possui garagem? ${house.isGarage}`);

      if (confirmation) {
        houses.push(house);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;

    case "2":
      for (let i = 0; i < houses.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            houses[i].nameOwner +
            "\nQuartos: " +
            houses[i].qtdBedrooms +
            "\nBanheiros: " +
            houses[i].qtdBathroom +
            "\nPossui garagem? " +
            houses[i].isGarage
        );
      }
      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção inválida");
  }
} while (answer !== "3");
