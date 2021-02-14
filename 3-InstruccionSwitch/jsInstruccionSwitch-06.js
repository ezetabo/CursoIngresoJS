//Ezequiel Taboada 1°D

function mostrar()
{	
	let horaDelDia;
	let mensaje;
	horaDelDia=txtIdHora.value;
	horaDelDia=parseInt(horaDelDia);

	if(horaDelDia<0 || horaDelDia>24)
		{
			mensaje="la hora no existe";
		}
		else
		{
			switch (horaDelDia)
			{
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
					mensaje="Es de mañana";
					break;

				case 12:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 19:		
					mensaje="Es de tarde";
					break;

				default:
					mensaje="es de noche";				
			}
		}
	alert(mensaje);
}

	