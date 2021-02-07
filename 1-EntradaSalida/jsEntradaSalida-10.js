//Ezequiel Taboada
/*
en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto,
tambien se debe pedir el porcentaje de descuento al usuario, 
mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/
function mostrarAumento()
{

	let producto;
	let precio;
	let descuento;
	let rebaja;
	let precioFinal;
	let mensaje;

	precio = txtIdImporte.value;
	producto = prompt("ingrese el producto");
	descuento = prompt("ingrese descuento");
	precio = parseFloat(precio);
	descuento = parseFloat(descuento);

	rebaja = precio*(descuento/100);
	precioFinal = precio - rebaja;

	mensaje =("usted compró un "+producto+" con "+descuento+ "%"+" de descuento "+"y el precio final es "+"$"+precioFinal);	

	txtIdResultado.value = mensaje;
	
}
