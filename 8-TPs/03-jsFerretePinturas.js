/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//Ezequiel Taboada

function FahrenheitCentigrados () 
{
	let temperatura;
	let centigrados

	temperatura = txtIdTemperatura.value;
	temperatura = parseFloat(temperatura);

	centigrados = (temperatura-32)*5/9;

	alert(temperatura+" Fahrenheit "+" son "+centigrados+" centigrados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let farenheit;

	temperatura = txtIdTemperatura.value;
	temperatura = parseFloat(temperatura);

	farenheit = (temperatura*9/5+32);

	alert(temperatura+" Centígrados "+" son "+farenheit+" Fahrenheit");	
}
