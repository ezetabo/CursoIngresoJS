/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

//Ezequiel Taboada
// 5
function mostrar()
{	
let elNombre;
elNombre = document.getElementById('txtIdNombre').value;

let edad;
edad = document.getElementById('txtIdEdad').value;

	alert("Usted se llama " + elNombre + " " + apellido + " y tiene " + edad + " años");
}


// 5 bis
function mostrar()
{	
let elNombre;
elNombre = document.getElementById('txtIdNombre').value;

let edad;
edad = document.getElementById('txtIdEdad').value;

let apellido;
apellido = prompt("Ingrese su apellido","aqui");

	alert("Usted se llama " + elNombre + " " + apellido + " y tiene " + edad + " años");
}
