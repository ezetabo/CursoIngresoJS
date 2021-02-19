function mostrar()
{
	let acumulador=0;
	let numeroIngresado;
	let promedio;
	let i=0;

	while (i < 5){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));

		acumulador=acumulador+numeroIngresado;
		i=i+1;

	} 

	
	promedio=acumulador/i;
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio
}