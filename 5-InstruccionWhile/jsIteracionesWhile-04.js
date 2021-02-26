//Ezequiel Taboada 1°D
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9"));
	
	while (isNaN(numeroIngresado) || (numeroIngresado>9 || numeroIngresado<0)) {
		
		
		numeroIngresado = prompt("Numero Invalido!!!","ingrese un número entre 0 y 9");
		
		
	}
	

	txtIdNumero.value=numeroIngresado;

}