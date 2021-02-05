/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

//Ezequiel Taboada

function sumar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1 = txtIdNumeroUno.value;	
	numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	   
	resultado = ( numero1 + numero2 );
	
	alert("la suma es " + resultado);
}

