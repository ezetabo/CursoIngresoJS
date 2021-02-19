/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	
	let respuesta="si";
	let acumulador=0;
	let numeroIngresado;
	let promedio;
	let contador=0;

	do {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta = prompt("¿quiere ingresar otro numero?")

	} while (respuesta== "si");

	/*while (respuesta== "si"){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta = prompt("¿quiere ingresar otro numero?")

	} */

	
	promedio=acumulador/contador;
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio
}