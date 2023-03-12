const titulo = document.querySelector(".contenedor1__Login__top");
const nombre = document.querySelector(".contenedor1__Login__nombre");
const email = document.querySelector(".contenedor1__Login__email");
const contraseña = document.querySelector(".contenedor1__Login__contraseña");
const confirmar = document.querySelector(".contenedor1__Login__confContraseña");
const modo = document.querySelector("#modo");
const Enviar = document.querySelector(".contenedor1__Login__enviar");
const mensajeError = document.querySelector(".contenedor1__Login__estado__p");
const ventanaError = document.querySelector(".contenedor1__Login__estado");
const okButon = document.querySelector(".contenedor1__Login__estado__boton");
const ventanaLogeo = document.querySelector(".contenedor1__Login__estado2");
const okLogeado = document.querySelector(".contenedor1__Login__estado2__boton")
const mensajeBueno = document.querySelector(".contenedor1__Login__estado2__p");
var tipo = false;
var nombreReg = null;
var emailReg = null;
var contraseñaReg = null;

Enviar.addEventListener("click",(e)=>{
    e.preventDefault();
    tipo == false ? Registrar() : Logear();
});

okLogeado.addEventListener("click",()=>{
    window.innerWidth < 1599 ? ventanaLogeo.style.transform = "translateX(-100%)" : ventanaLogeo.style.transform = "translateX(-406px)";
});

okButon.addEventListener("click",()=>{
    window.innerWidth < 1599 ? ventanaError.style.transform = "translateX(100%)" : ventanaError.style.transform = "translateX(406px)";
});

modo.addEventListener("change",()=>{
	if(tipo == false) {
        tipo = true;
        titulo.innerHTML = "Login";
        contraseña.style.marginBottom = "70.319px";
        confirmar.style.display = "none";
        nombre.value = null;
        email.value = null;
        contraseña.value = null;
        confirmar.value = null;
    } else {
        tipo = false;
        titulo.innerHTML = "Register";
        contraseña.style.margin = "0px";
        confirmar.style.display = "inline";
        nombre.value = null;
        email.value = null;
        contraseña.value = null;
        confirmar.value = null;
    }
});

function validarRegistro (){
    let error = [];
    let RegEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let RegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    //pongo restricciones al nombre.
    if (nombre.value.length >= 2) {
        error[1] = 0;
    }else{
        error[1] = 1;
        error[2] = "&nbsp;&nbsp;Su nombre no puede tener menos de 2 caracteres."; 
        return error;
    }
    if (nombre.value.length <= 30) {
        error[1] = 0;
    } else {
        error[1] = 1;
        error[2] = "&nbsp;&nbsp;Su nombre no puede tener mas de 30 caracteres. Pruebe poner su apodo.";
        return error;
    } 
    //busco errores en el email.
    if (RegEmail.test(email.value) == true) {
        error[1] = 0;
    } else {
        error[1] = 2;
        error[2] = "El Email no es valido";
        return error;
    }
    //busco errores en las contraseñas (tanto confirmar como contraseña).
    if (RegPass.test(contraseña.value) == true && contraseña.value === confirmar.value) {
        error[1] = 0;
    } else {
        error[1] = 3;
        error[2] = "&nbsp;&nbsp;La contraseña no es valida o No coinciden, recuerde que la contraseña deve cumplir con:</br></br>1- una mayuscula.</br>2- una minuscula.</br>3- un numero.</br>4- un caracter especial(!%*?&)</br>5- no tener espacios.</br>6- entre 8 y 15 caracteres.";
        return error;
    }
    return error;
}

function Registrar(){
    let errorRegistro = validarRegistro(); 
    if (errorRegistro[1] == 0 ) {
        nombreReg = nombre.value;
        emailReg = email.value;
        contraseñaReg = contraseña.value;
        mensajeBueno.innerHTML = "Te has registrado";
        window.innerWidth < 1599 ? ventanaLogeo.style.transform = "translateX(100%)" : ventanaLogeo.style.transform = "translateX(406px)";
    } else {
        mensajeError.innerHTML = errorRegistro[2];
        window.innerWidth < 1599 ? ventanaError.style.transform = "translateX(-100%)" : ventanaError.style.transform = "translateX(-406px)";
    }
}

function Logear(){
    let caracteres = nombre.value + email.value + contraseña.value;
    if (nombre.value === nombreReg && email.value === emailReg && contraseña.value === contraseñaReg && caracteres.length > 3) {
        mensajeBueno.innerHTML = "Te has logeado";
        window.innerWidth < 1599 ? ventanaLogeo.style.transform = "translateX(100%)" : ventanaLogeo.style.transform = "translateX(406px)";
    } else {
        mensajeError.innerHTML ="&nbsp;&nbsp;Los datos ingresados no coinciden con los de ningun usuario registrado.";
        window.innerWidth < 1599 ? ventanaError.style.transform = "translateX(-100%)" : ventanaError.style.transform = "translateX(-406px)";
    }
}