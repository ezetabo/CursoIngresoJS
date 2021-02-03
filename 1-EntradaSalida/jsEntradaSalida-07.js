/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//Ezequiel Taboada
function sumar()
{	
	let numero1;
	numero1 = txtIdNumeroUno.value;

	let numero2;
	numero2 = txtIdNumeroDos.value;
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

    let resultado;
	resultado = ( numero1 + numero2 );

	
	alert("la suma es " + resultado);
}


function restar()
{
	let numero1;
	numero1 = txtIdNumeroUno.value;

	let numero2;
	numero2 = txtIdNumeroDos.value;

    let resultado;
	resultado = ( numero1 - numero2 );
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	
	alert("la resta es " + resultado);	
}


function multiplicar()
{ 
	let numero1;
	numero1 = txtIdNumeroUno.value;

	let numero2;
	numero2 = txtIdNumeroDos.value;

    let resultado;
	resultado = ( numero1 * numero2 );
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	
	alert("la multiplicacion es " + resultado);
}


function dividir()
{
	let numero1;
	numero1 = txtIdNumeroUno.value;

	let numero2;
	numero2 = txtIdNumeroDos.value;

    let resultado;
	resultado = ( numero1 / numero2 );
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	
	alert("la division es " + resultado);
}

