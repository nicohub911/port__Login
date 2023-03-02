const titulo = document.querySelector(".contenedor1__Login__top");
const nombre = document.querySelector(".contenedor1__Login__nombre");
const email = document.querySelector(".contenedor1__Login__email");
const contraseña = document.querySelector(".contenedor1__Login__contraseña");
const confirmar = document.querySelector(".contenedor1__Login__confContraseña");
const modo = document.querySelector("#modo");
const Enviar = document.querySelector(".contenedor1__Login__enviar");
var tipo = false;



modo.addEventListener("change",()=>{
	if(tipo == false) {
        tipo = true;
        titulo.innerHTML = "Login";
        confirmar.style.display = "none";
    } else {
        tipo = false;
        titulo.innerHTML = "Register";
        confirmar.style.display = "inline";
    }
});

Enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    nombre.value.length >= 2 && nombre.value.length <= 30 ? console.log("paso")  : console.log("no paso"); 
});

function validarRegistro (){
    let error = [];
    let RegEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let RegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    //pongo restricciones al nombre.
    nombre.value.length >= 2 ? error[1] = 0 : error[1] = 1, error[2] = "Su nombre no puede tener menos de 2 caracteres.";
    nombre.value.length <= 30 ? error[1] = 0 : error[1] = 1, error[2] = "Su nombre no puede tener mas de 30 caracteres. pruebe poner su apodo.";
    //busco errores en el email.
    RegEmail.test(email.value) == true ? error[1] = 0 : error[1] = 2, error[2] = "El Email no es valido";
    //busco errores en las contraseñas, tanto confirmar como contraseña.
    RegPass.test(contraseña.value) == true && contraseña.value === confirmar.value ? error[1] = 0 : error[1] = 3, error[2] = "La contraseña no es valida o No coinciden, recuerde que la contraseña deve cumplir con:</br>1- una mayuscula.</br>2- una minuscula.</br>3- un numero.</br>4- un caracter especial(!%*?&)</br>5- no tener espacios.</br>6- entre 8 y 15 caracteres.</br>7- empezar con mayuscula o minuscula.";
}

