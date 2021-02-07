//Ezequiel Taboada
/* 
1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%.
*/

function mostrar()
{

	let descripcion;
	let precio;
	let aumento;
	let precioFinal;
	let mensaje;

	descripcion = prompt("ingrese el producto");
	//para que funcione con el 04.html, para la consigna deberia ir precio = txtIdPrecio.value;
	precio = prompt("ingrese el precio");
	precio = parseFloat(precio);

	aumento = precio*30/100;
	precioFinal = aumento+precio;

	mensaje = "su "+descripcion+" vale "+precioFinal;

	//para que funcione con el 04.html, para la consigna deberia ir alert(mensaje);
	txtIdNombre.value = mensaje;

}

