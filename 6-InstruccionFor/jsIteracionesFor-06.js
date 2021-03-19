/*al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/
//Taboada Ezequiel 1°D
function mostrar()
{
	let numeroIngresado;
	let contadorpares;
	let i;
	contadorpares=0;

	numeroIngresado=parseInt(prompt("Ingrese un numero"));
	
	for(i=2;i<=numeroIngresado;i+=2){
		contadorpares++;
		document.write(i+"<br>");
	}
	
	document.write("hay "+contadorpares+" numero pares");

}