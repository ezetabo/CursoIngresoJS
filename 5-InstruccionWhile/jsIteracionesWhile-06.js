//Taboada Ezequiel 1°D
function mostrar()
{
	let sumaNumeroIngresado=0;
	let numeroIngresado;
	let promedio;
	let i=0;

	while (i < 5){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));

		sumaNumeroIngresado+=numeroIngresado;
		i=i+1;

	} 
	promedio=sumaNumeroIngresado/i;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}
