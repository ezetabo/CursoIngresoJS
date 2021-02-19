// Ezequiel Taboada 1°D

function mostrar()
{
	let clave;
	let claveCorrecta;

	claveCorrecta="utn750";	
	clave = prompt("Ingrese su Clave");  

	while (clave != claveCorrecta ) 
	{
		clave=prompt("Clave Incorrecta","Ingrese su CLave");
	}

	alert("Clave Correcta, Bienvenido");
	
}