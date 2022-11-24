const btnLogin = document.getElementById('saveChanges');

function login() {
  var loginNom= document.getElementById('loginNombre').value;
  var loginContra = document.getElementById('loginContraseña').value;
  

  if(loginNom=='Brandon' && parseInt(loginContra) ==123){
    alert("inicio de sesion exitoso")
    window.location.href = "todosLosProductos.html";
  }
  else{
    alert("inicio de sesion fracaso")
  }
}

btnLogin.addEventListener('click', login)


////////////popup
///login
$(document).ready(function () {
  $("#myInput").click(function () {
      $("#a").modal("show");
  });
});


