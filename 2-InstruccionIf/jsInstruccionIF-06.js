/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
//Ezequiel Taboada 1°D
function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad<12)		
	{		
	alert("es un niño");
	}
	else if(edad>12 && edad<18)
	{	
	alert("es un adolescente");
	}
	else
	{
	alert("es un adulto");
	}
}
