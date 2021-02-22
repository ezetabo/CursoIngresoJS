/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	
	let respuesta='s';
	let acumulador=0;
	let numeroIngresado;
	let promedio;
	let i=0;

	do {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumulador=acumulador+numeroIngresado;
		i=i+1;
		respuesta = prompt("¿quiere ingresar otro numero?")

	} while (respuesta== 's');

	/*while (respuesta== 's'){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumulador=acumulador+numeroIngresado;
		i=i+1;
		respuesta = prompt("¿quiere ingresar otro numero?")

	} */

	
	promedio=acumulador/contador;
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio
}