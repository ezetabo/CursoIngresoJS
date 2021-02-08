/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
//Ezequiel Taboada 1°D

function mostrar()
{
	let numero;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numero); 
	
}