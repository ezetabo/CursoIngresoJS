/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.X
b) Cuantos mayores de edad estan viudosX
c) La cantidad de hombres que hay solteros o viudos.X
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperaturaX
e) El promedio de edad entre los hombres solteros.X
*/
// Taboada Ezequiel 1°D
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoMatrimonial;
	let temperatura;
	let tempereturaMayor;
	let nombreTemperatura;
	let mayoresViudos=0;
	let hombresNocasados=0;
	let solteros=0;
	let edadSolteros=0;
	let ancianosTemperatura=0;
	let promedioEdadSolteros;
	let seguir=true;
	let flag=0;

	while (seguir==true) {
		nombre=prompt("ingrese el nombre");

		edad=parseInt(prompt("ingrese la edad"));
		while (isNaN(edad) || edad<0) {
			edad=parseInt(prompt("dato invalido!! reingrese la edad"));			
		}

		sexo=prompt("Ingrese el sexo:","'M' para masculino y 'F'para femenino");
		sexo=sexo.toLowerCase();
		while (sexo!='f' && sexo!='m') {
			sexo=prompt("Sexo invalido!!!, reingrese el sexo:","'m' para masculino y 'f'para femenino");
			sexo=sexo.toLowerCase();		
		}
		estadoMatrimonial=prompt("Ingrese estado civil","S.Soltero C.Casado V.Viudo");
		estadoMatrimonial=estadoMatrimonial.toLowerCase();
		while (estadoMatrimonial!='s' && estadoMatrimonial!='c' && estadoMatrimonial!='v') {					
			estadoMatrimonial=prompt("Estado civil Invalido!!!","S.Soltero C.Casado V.Viudo");
			estadoMatrimonial=estadoMatrimonial.toLowerCase();			
		}

		temperatura=parseFloat(prompt("ingrese la temperatura"));
		while (isNaN(temperatura) || (temperatura<35 || temperatura>43)) {
			temperatura=parseFloat(prompt("Temperatura erronea!!!  Reingrese la temperatura"));			
		}

		if (estadoMatrimonial!='c'&& sexo=='m') {
			hombresNocasados++;				
		}
		if (estadoMatrimonial=='s'&& sexo=='m') {
			edadSolteros+=edad;
			solteros++;
		}

		if (flag==0 || temperatura>tempereturaMayor) {
			tempereturaMayor=temperatura;
			nombreTemperatura=nombre;
			flag=1;
		}

		if (edad>60 && temperatura>38) {
			ancianosTemperatura++;
			
		}

		if (edad>20 && estadoMatrimonial=='v') {
			mayoresViudos++;
		}

		seguir=confirm("¿Quiere ingresar otro pasajero?");
	}

	promedioEdadSolteros=edadSolteros/solteros;

	console.log(nombreTemperatura+" con "+tempereturaMayor+"° es el pasajero con mas temperatura");
	console.log("cantidad de pasajeros que son mayores de edad y estan viudos: "+mayoresViudos);
	console.log("cantidad de hombres que hay solteros o viudos: "+hombresNocasados);
	console.log("cantiad de personas de la tercera edad con mas de 38 de temperatura: "+ancianosTemperatura);
	console.log("La edad promedio de los hombres solteros es de "+promedioEdadSolteros+" años");
}