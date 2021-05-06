function validarDados() {
  if (document.forms.formulario1.elements["idNome"].value.length < 9) {
    alert("Nome não pode ter menos de 10 caracteres!");
    document.forms.formulario1.elements[0].focus();
    return false;
  };

  if (document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
    alert("Preencha campo E-MAIL corretamente!");
    document.forms.formulario1.elements.idEmail.focus();
    return false;
  }

  if (document.forms.formulario1.elements.idMensagem.value.length < 20) {
    alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
    document.getElementById("idMensagem").focus();
    return false;
  }

  if (document.forms.formulario1.elements["tipo"].value == 1) {
    alert("Que bom que você voltou a visitar essa página!");
  } else {
    alert("Volte sempre a essa página!");
  }

  return true;
}