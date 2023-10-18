
let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {

  navBar = document.querySelector(".navbar");

  navBar.classList.toggle("active");

};

const form = document.getElementById('form');
const nombre = document.getElementById('name');
const parrAlerta = document.getElementById('alertas');

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrAlerta.innerText = "";

    if(nombre.value.length < 4) {
      warnings += 'El nombre debe contener más de 4 caracteres';
      valido = false;
    }

    if(!valido) {
      parrAlerta.innerText = warnings;
      parrAlerta.style.color = 'red';
      form.style.boxSizing = 'border-box';
    } else {
      parrAlerta.innerText = 'Enviado';
    }

    return valido;
}

form.addEventListener('submit', (e) => {
  if(validarFormulario()){
    form.submit();
  } else {
    e.preventDefault();
  }

});
