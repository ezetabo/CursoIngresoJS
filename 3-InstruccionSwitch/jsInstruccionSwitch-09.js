// Ezequiel Taboada 1°D

function mostrar()
{
	let estacion;
	let destino;
	let estadia;
	let descuento;
	let precioFinal;

	estadia = 15000;
	destino = txtIdDestino.value;
	estacion = txtIdEstacion.value;

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				descuento=-20;
			}
			else
			{
				if(destino=="Mar del plata")
				{
					descuento=20;
				}
				else
				{
					descuento=10;
				}
			}
			break;

		case "Verano":
			if(destino=="Bariloche")
			{
				descuento=20;
			}
			else
			{
				if(destino=="Mar del plata")
				{
					descuento=-20;
				}
				else
				{
					descuento=-10;
				}
			}
			break;

		default:
			if(destino=="Cordoba")
			{
				descuento=0;
			}
			else
			{
				descuento=-10;
			}
			
	}

	precioFinal=estadia-estadia*descuento/100;

	alert(precioFinal);

}