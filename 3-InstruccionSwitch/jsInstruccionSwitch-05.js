// Ezequiel Taboada 1°D

function mostrar()
{
	let horaDelDia;	
	horaDelDia = txtIdHora.value;
	horaDelDia=parseInt(horaDelDia);	
		
	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
			alert("Es de mañana");
			break;
	}

}