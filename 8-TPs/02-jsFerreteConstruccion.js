/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//Ezequiel Taboada

function Rectangulo () 
{
	let largo;
	largo = txtIdLargo.value;
	largo = parseFloat(largo);

	let ancho;
	ancho = txtIdAncho.value;
	ancho = parseFloat(ancho);

	let perimetro;
	perimetro = (largo+ancho)*2;

	let alambre;
	alambre = perimetro*3;

	alert(alambre);


}

function Circulo () 
{
	let radio;
	radio = txtIdRadio.value;
	radio = parseFloat(radio);

	let perimetro;
	perimetro = (3.14*radio*2);

	let alambre;
	alambre = perimetro*3;

	alert(alambre);

}

function Materiales () 
{
	let largo;
	largo = txtIdLargo.value;
	largo = parseFloat(largo);

	let ancho;
	ancho = txtIdAncho.value;
	ancho = parseFloat(ancho);

	let area;
	area = (largo*ancho);

	let cemento;
	cemento = area*2;

	let cal;
	cal = area*3;

   
	alert("nesecita " + cemento + " bolsas de cemento " + " y " + cal + " bolsas de cal");


}