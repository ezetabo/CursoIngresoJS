/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	let edad;
	let	estado;

	edad = txtIdEdad.value;
	estado = estadoCivil.value;
	edad = parseInt(edad);
	
	if(edad<18 && estado!="Soltero")
	{
	alert("es muy pequeño para no ser soltero");
	}
	
}