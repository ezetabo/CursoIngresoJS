/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9");
	numeroIngresado = parseInt(numeroIngresado);
	
	while (numeroIngresado) {
		if (numeroIngresado>9 || numeroIngresado<0)
		{
			numeroIngresado = prompt("Numero Invalido!!!","ingrese un número entre 0 y 9");
		}
		break;
	}
	

	txtIdNumero.value=numeroIngresado;

}