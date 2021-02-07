/*
Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo
*/
//Ezequiel Taboada 1°D

function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let suma;
	let promedio;
	let modulo;

	numeroUno = txtIdNumeroDividendo.value;	
	numeroDos = txtIdNumeroDivisor.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno+numeroDos;
	promedio =(numeroUno+numeroDos)/2;    
	modulo = ( numeroUno % numeroDos );

	console.log("la suma es " + suma);
	console.log("el promedio es " + promedio);
	console.log("el modulo es " + modulo);
}
