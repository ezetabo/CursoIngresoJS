/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//Taboada Ezequiel

function Sumar () 
{
	let precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);

	let precio2;
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);

	let precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);

	let valor;
	valor = (precio1+precio2+precio3);

	
	alert(valor);


}


function Promedio () 


{
	let precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);

	let precio2;
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);

	let precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);
	
	let promedio;
	promedio = (precio1+precio2+precio3)/3;

	alert(promedio);
}


function PrecioFinal () 

{
	let precio1;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseFloat(precio1);

	let precio2;
	precio2 = txtIdPrecioDos.value;
	precio2 = parseFloat(precio2);

	let precio3;
	precio3 = txtIdPrecioTres.value;
	precio3 = parseFloat(precio3);

	let valor;
	valor = (precio1+precio2+precio3);

	let iva;
	iva = valor * 21/100;

	let precioFinal;
	precioFinal = valor + iva;


	alert(precioFinal);
}