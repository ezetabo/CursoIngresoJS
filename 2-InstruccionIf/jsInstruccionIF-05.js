/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
//Ezequiel Taboada 1°D

function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<13 || edad>17)
	{		
	alert("no es un adolescente");
	}

}
	