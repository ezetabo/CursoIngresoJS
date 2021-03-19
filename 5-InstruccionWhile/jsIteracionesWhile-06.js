//Taboada Ezequiel 1°D
/*function mostrar()
{
	let sumaNumeroIngresado=0;
	let numeroIngresado;
	let promedio;
	let i=0;

	while (i < 5){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));

		sumaNumeroIngresado+=numeroIngresado;
		i++;

	} 
	promedio=sumaNumeroIngresado/i;

	txtIdSuma.value=sumaNumeroIngresado;
	txtIdPromedio.value=promedio;
}*/
function mostrar()
{
	let sumaNumeroIngresado=0;
	let numeroIngresado;
	let promedio;
	let i=0;

	do {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
	
		sumaNumeroIngresado+=numeroIngresado;

		i++;
		
	} while (i<5);
		

	
	promedio=sumaNumeroIngresado/i;

	txtIdSuma.value="la suma es "+ sumaNumeroIngresado;
	txtIdPromedio.value="el promedio es "+promedio;

}