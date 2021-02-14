// Ezequiel Taboada 1°D

function mostrar()
{
	let destino;
	let mensaje;

	destino=txtIdDestino.value;

	switch (destino)
	{
		case "Ushuaia":
			mensaje="Se ubica al SUR";
			break;

		case "Bariloche":
			mensaje="Se ubica al OESTE";
			break;
		case "Cataratas":
			mensaje="Se ubica al NORTE";
			break;
		default:
			mensaje="Se ubica al ESTE";
	}
	
	alert(mensaje);
}