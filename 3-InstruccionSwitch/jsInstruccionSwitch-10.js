//Ezequiel Taboada 1°

function mostrar()
{
	let estacion;
	let destino;
	let mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				mensaje="Se viaja";
			}
			else
			{
				mensaje="No se viaja";
			}
			break;

		case "Verano":
			if(destino=="Mar del plata" || destino=="Cataratas")
			{
				mensaje="Se viaja";
			}
			else
			{
				mensaje="No se viaja";
			}
			break;
				
		case "Otoño":
			mensaje="Se viaja";
			break;

		case "Primavera":
			if(destino=="Bariloche")
			{
				mensaje="No se viaja";
			}
			else
			{
				mensaje="Se viaja";
			}
			break;
		}

	alert(mensaje);
}