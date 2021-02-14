// Ezequiel Taboada 1°D

function mostrar()
{
	let meses;
	let mensaje;
	meses = txtIdMes.value;
	 
	switch(meses)
	{
		case "Febrero":
			mensaje="tiene 28 días";
			break;

		case "Abril":
		case "Junio":
		case "Noviembre":
		case "Septiembre":
			mensaje="tiene 30 días";
			break;

		default:
			mensaje="tiene 31 días";

	}

	alert(mensaje);

}