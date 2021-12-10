const submit = document.getElementById("btn-form");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("name");
  const userphone = document.getElementById("tel");

  if (username.value == "" || userphone.value == "") {
    alert("Por favor, preencha os campos corretamente");
    return;
  } else {
    alert("Nome e telefone cadastrados, conversaremos com você em breve");
  }
});
