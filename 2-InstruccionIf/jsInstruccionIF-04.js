/*
Al ingresar una edad debemos informar si la persona es adolescente,
 edad entre 13 y 17 años (inclusive).
 */
//Ezequiel Taboada 1°D

function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>12 && edad<18)
		
	{		
	alert("es un adolescente");
	}

}
	