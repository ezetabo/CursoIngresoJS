/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//Ezequiel Taboada
function mostrarAumento()
{

	let importe;
	importe = txtIdImporte.value;
	importe = parseInt(importe);

	let descuento;
	descuento = importe * 25/100;

	let resultado;
	resultado = importe - descuento;

	txtIdResultado.value = resultado;
	
}
