const jobs = [];

function listJobs() {
  let jobsText = "Vagas:\n";
  jobsText += jobs.reduce(function (textFinal, job, index) {
    //1. nome, (x candidatos)
    textFinal += index + ". " + job.nameJob;
    textFinal += "( " + job.candidates.length + " candidatos)\n";
    return textFinal;
  }, "");

  alert(jobsText);
}

function creatingJob() {
  const newJob = {};
  newJob.nameJob = prompt("Informe um nome para a vaga:");
  newJob.description = prompt("Informe uma descrição para a vaga:");
  newJob.date = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:");
  newJob.candidates = [];

  const confirmation = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" + viewJob(newJob)
  );

  if (confirmation) {
    jobs.push(newJob);
    alert("Vaga criada");
  }
}

function visualiseJob() {
  let index = -1;
  do {
    index = prompt("Informe o índice da vaga que deseja exibir:");
    if (confirmIndex(index) === false) {
      alert("Indice informado não existe");
    }
    if (jobs.length === 0) {
      return;
    }
  } while (confirmIndex(index) === false);

  const job = jobs[index];
  const candidadesText = job.candidates.reduce(function (textFinal, candidate) {
    return textFinal + "- " + candidate + "\n";
  }, "");

  alert(
    "Vaga nº" +
      index +
      "\n" +
      viewJob(jobs[index]) +
      "\nQuantidade de candidatos: " +
      job.candidates.length +
      "\nCandidatos inscritos: \n" +
      candidadesText
  );
}

function registerCandidate() {
  const nameCandidate = prompt("Informe o nome do(a) candidato(a):");
  let index = -1;
  do {
    index = prompt(
      "Informe o índice da vaga para a qual o(a) candidato deseja se inscrever:"
    );
    if (confirmIndex(index) === false) {
      alert("Indice informado não existe");
    }
    if (jobs.length === 0) {
      return;
    }
  } while (confirmIndex(index) === false);

  const job = jobs[index];

  const confirmation = confirm(
    "Deseja inscrever o candidato " +
      nameCandidate +
      " na vaga " +
      index +
      "?\n" +
      viewJob(job)
  );

  if (confirmation) {
    job.candidates.push(nameCandidate);
    alert("Inscrição realizada.");
  }
}

function deleteJob() {
  let index = -1;
  do {
    index = prompt("Informe o índice da vaga que deseja excluir:");
    if (confirmIndex(index) === false) {
      alert("Indice informado não existe");
    }
    if (jobs.length === 0) {
      return;
    }
  } while (confirmIndex(index) === false);

  const job = jobs[index];
  const confirmation = confirm(
    "Tem certeza que deseja excluir a vaga " + index + "?\n" + viewJob(job)
  );

  if (confirmation) {
    jobs.splice(index, 1);
    alert("Vaga excluída.");
  }
}

function viewJob(job) {
  return (
    "Nome: " +
    job.nameJob +
    "\nDescrição: " +
    job.description +
    "\nData limite: " +
    job.date
  );
}

function confirmIndex(index) {
  return index >= 0 && index < jobs.length;
}

function exibirMenu() {
  return prompt(
    "Cadastro de Vagas de Emprego\n\n" +
      "Escolha uma das opções:\n" +
      "1.Listar vagas disponíveis\n" +
      "2.Criar uma nova vaga\n" +
      "3.Visualizar uma vaga\n" +
      "4.Inscrever um(a) candidato(a)\n" +
      "5.Excluir uma vaga\n" +
      "6.Sair\n"
  );
}

function executar() {
  let answer = "";

  do {
    answer = exibirMenu();

    switch (answer) {
      case "1":
        listJobs();
        break;
      case "2":
        creatingJob();
        break;
      case "3":
        visualiseJob();
        break;
      case "4":
        registerCandidate();
        break;
      case "5":
        deleteJob();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida");
    }
  } while (answer !== "6");
}

executar();
