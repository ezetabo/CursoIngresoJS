/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	
	let respuesta=true;
	let acumuladorNumerosIngresados=0;
	let numeroIngresado;
	let promedio;
	let contadorDeIngresos=0;

	do {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumuladorNumerosIngresados+=numeroIngresado;
		contadorDeIngresos++;
		respuesta = confirm("¿quiere ingresar otro numero?");

	} while (respuesta== true);

	/*while (respuesta== 's'){
		
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		
		acumuladorNumerosIngresados+=numeroIngresado;
		contadorDeIngresos++;
		respuesta = prompt("¿quiere ingresar otro numero?")

	} */

	
	promedio=acumuladorNumerosIngresados/contadorDeIngresos;
	
	txtIdSuma.value=acumuladorNumerosIngresados;
	txtIdPromedio.value=promedio
}