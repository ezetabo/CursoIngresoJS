/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let numeroIngresado;
	let contadorDivisores;
	let i;
	contadorDivisores=0;

	numeroIngresado=parseInt(prompt("Ingrese un numero"));
	
	for(i=1;i<=numeroIngresado;i++){
		if (numeroIngresado%i==0) {
			contadorDivisores++;
			document.write(i+"<br>");
		}
		
	}
	
	document.write("hay "+contadorDivisores+" divisores del numero "+numeroIngresado);

}