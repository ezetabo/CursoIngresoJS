// Ezequiel Taboada 1°D

function mostrar()
{	
	let meses;
	let mensaje;

	meses = txtIdMes.value;
	
	switch(meses)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":	
		case "Abril":
		case "Mayo":	
		case "Junio":
			mensaje="Falta para el invierno";
			break;	

		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio";
			break;

		default:
			mensaje="Ya pasamos el frio, ahora calor!!!";	
	}

	alert(mensaje);

}