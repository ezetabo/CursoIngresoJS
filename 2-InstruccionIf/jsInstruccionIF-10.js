/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	
	let nota;
	let maximo;
	let minimo;
	let mensaje;

	maximo = 10;
	minimo = 1;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);

	if(nota>8)
	{
		mensaje="EXCELENTE";
	}
	else
	{
		if(nota<4)
		{
			mensaje="Vamos, la proxima se puede";
		}
		else
		{
			mensaje="APROBÓ";
		}
	}

alert("Su nota es un "+nota+", "+mensaje);

}