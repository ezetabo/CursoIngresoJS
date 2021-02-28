/*Ingresar 5 numeros, y determinar la cantidad de numeros 
que son mayores que 10 y menores 20 (incluisive en ambos casos)
2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). 
Mostrar tambien el promedio de los numeros que cumplen la condicion.*/
// Ezquiel Taboada 1°D
function mostrar()
{	
	let numeroIngresado;
	let numerosDentroDelRango=0;
	let sumaNumerosDentoDelRango=0;
	let promedio=0;		
	let seguir=true;

	while (seguir==true) {		
		numeroIngresado=parseInt((prompt("ingrese un numero")));
		if (numeroIngresado>9 && numeroIngresado<21) {
			sumaNumerosDentoDelRango+=numeroIngresado;
			numerosDentroDelRango++;
		} 
		
		seguir=confirm("¿Quiere ingresar otro numero?");
	}
	if (numerosDentroDelRango!=0) {
		
		promedio=sumaNumerosDentoDelRango/numerosDentroDelRango;
	}
	alert(numerosDentroDelRango+" numeros estan entre 10 y 20, inclusive y el promedio es: "+promedio);
	
}
/*
let i;
	i=0;
	while (i<10) 
	{
		i=i+1;		
		console.log(i);
	
	}*/