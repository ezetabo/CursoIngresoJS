// Ezequiel Taboada

function mostrar()
{
	let destino;
	let mensaje;

	destino=txtIdDestino.value;

	switch(destino)
	{
		case "Ushuaia":
		case "Bariloche":
			mensaje="Es un clima FRIO";
			break;

		default:
			mensaje="Es un clima CALIDO";
	}

	alert(mensaje);

}