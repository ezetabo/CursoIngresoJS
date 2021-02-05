/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//Taboada Ezequiel

function Sumar () 
{
let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;
	precio1 = parseFloat(precio1);	
	precio2 = parseFloat(precio2);	
	precio3 = parseFloat(precio3);

	valor = (precio1+precio2+precio3);
	
	alert("el valor es: "+valor);


}


function Promedio () 


{
	let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;
	precio1 = parseFloat(precio1);	
	precio2 = parseFloat(precio2);	
	precio3 = parseFloat(precio3);	
	
	promedio = (precio1+precio2+precio3)/3;

	alert("el promedio es: "+promedio);
}


function PrecioFinal () 

{
	let precio1;	
	let precio2;
	let precio3;
	let valor;
	let iva;
	let precioFinal;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;
	precio1 = parseFloat(precio1);	
	precio2 = parseFloat(precio2);	
	precio3 = parseFloat(precio3);
	
	valor = (precio1+precio2+precio3);	
	iva = valor * 21/100;
	precioFinal = valor + iva;

	alert("el preciofinal es: "+precioFinal);
}