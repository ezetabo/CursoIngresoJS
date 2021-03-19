/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/

//Taboada Ezequiel 1°D

function mostrar()
{
	let continente;
	let pais;
	let habitantes;
	let nivelPobresa;
	let temperatura;
	let i;
	let cantidadTemperaturaPares;
	let contadorTemperaturaImparEuropa;
	let MenosHabitantes;
	let paisMenosHabitantes;
	let cantidadPaisesMas40;
	let cantidadHabitantesMas40;
	let totalDeHabitantes;
	let promedioHabitantes;
	let promedioHabitantesMas40;
	let cantidadHabitantesEuropa;
	let cantidadHabitantesAsia;
	let cantidadHabitantesAmerica;
	let cantidadHabitantesAfrica
	let cantidadHabitantesOceania;
	let temperaturaMInima;
	let paisMenorTemperatura;
	let cantidadPaisesAmericaMenos0;
	let continenteMasHabitantes;


	cantidadTemperaturaPares=0;
	contadorTemperaturaImparEuropa=0;
	cantidadPaisesMas40=0;	
	cantidadHabitantesMas40=0;
	cantidadHabitantesEuropa=0;
	cantidadHabitantesAsia=0;
	cantidadHabitantesAmerica=0;
	cantidadHabitantesAfrica=0;
	cantidadHabitantesOceania=0;
	cantidadPaisesAmericaMenos0=0;

	for(i=0;i<5;i++){

		continente=prompt("ingrese el continente","america , asia , europa ,africa y oceania");
		continente=continente.toLocaleLowerCase();		
		  while (continente!="america" && continente!="asia" && continente!="europa"&& continente!="africa"&& continente!="oceania") {
        continente=prompt("Dato incorrecto!! Reingrese el continente","america , asia , europa ,africa y oceania");
        continente=continente.toLocaleLowerCase();
      	}	
		
		pais=prompt("ingrese el nombre del pais");
		while (isNaN(pais)==false) {
			pais=prompt("Nombre invalido!!! Reingrese el nombre del pais");	
		}

		temperatura=parseFloat(prompt("ingrese la temperatura"));
        while (isNaN(temperatura) || (temperatura<-50 || temperatura>50)) {
            temperatura=parseFloat(prompt("Temperatura erronea!!!  Reingrese la temperatura"));			
        }
        habitantes=parseInt(prompt("ingrese la cantidad de habitantes","en millones"));
        while (isNaN(habitantes) || (habitantes<1 || habitantes>7000)) {
            habitantes=parseInt(prompt("Cantidad erronea!!!  Reingrese la cantidad de habitantes"));			
        }

		if (continente!="europa") {
			nivelPobresa=prompt("Ingrese el nivel de pobresa","rico , muy rico");
			nivelPobresa=nivelPobresa.toLowerCase();
			while (nivelPobresa!='rico' && nivelPobresa!='muy rico') {
				nivelPobresa=prompt("Dato invalido!!!, reIngrese el nivel de pobresa:","pobre, rico , muy rico");
				nivelPobresa=nivelPobresa.toLowerCase();		
      		}
		} else {
			nivelPobresa=prompt("Ingrese el nivel de pobresa","pobre, rico , muy rico");
			nivelPobresa=nivelPobresa.toLowerCase();
			while (nivelPobresa!='pobre' && nivelPobresa!='rico' && nivelPobresa!='muy rico') {
				nivelPobresa=prompt("Dato invalido!!!, reIngrese el nivel de pobresa:","pobre, rico , muy rico");
				nivelPobresa=nivelPobresa.toLowerCase();		
      		}
		}

		if (temperatura %2==0) {
            cantidadTemperaturaPares++;
        }		

		if (i==1 || habitantes<MenosHabitantes) {
			MenosHabitantes=habitantes;
			paisMenosHabitantes=pais;
		}

		if(temperatura>40){
			cantidadPaisesMas40++;
			cantidadHabitantesMas40+=habitantes;
		}

		if (i==1 || temperatura<temperaturaMInima) {
			temperaturaMInima=temperatura;
			paisMenorTemperatura=pais;
		}



		switch (continente) {
			case "europa":
				cantidadHabitantesEuropa+=habitantes;
				if (!(temperatura %2==0)) {
					contadorTemperaturaImparEuropa++;
				}
				break;

			case "africa":
				cantidadHabitantesAfrica+=habitantes;
				break;

			case "america":
				cantidadHabitantesAmerica+=habitantes;
				if (temperatura<0) {
					cantidadPaisesAmericaMenos0++;
				}
				break;

			case "asia":
				cantidadHabitantesAsia+=habitantes;
				break;
			
			default:
				cantidadHabitantesOceania+=habitantes;
				break;
		}


	}

	totalDeHabitantes=cantidadHabitantesAfrica+cantidadHabitantesAmerica+cantidadHabitantesAsia+cantidadHabitantesEuropa+cantidadHabitantesOceania;
	
	promedioHabitantes=totalDeHabitantes/i;

	promedioHabitantesMas40=cantidadHabitantesMas40/cantidadPaisesMas40;

	if (cantidadHabitantesEuropa>cantidadHabitantesAfrica && cantidadHabitantesEuropa>cantidadHabitantesAmerica && cantidadHabitantesEuropa>cantidadHabitantesOceania && cantidadHabitantesEuropa>cantidadHabitantesAsia) {
		continenteMasHabitantes="europa es el continente con mas habitantes";
	} else {if (cantidadHabitantesAmerica>cantidadHabitantesAfrica && cantidadHabitantesAmerica>cantidadHabitantesAsia && cantidadHabitantesAmerica>cantidadHabitantesOceania) {
		continenteMasHabitantes="america es el continente con mas habitantes";
	} else {if (cantidadHabitantesAfrica>cantidadHabitantesAsia && cantidadHabitantesAfrica>cantidadHabitantesOceania) {
		continenteMasHabitantes="africa es el continente con mas habitantes";
	} else {if (cantidadHabitantesAsia>cantidadHabitantesOceania) {
		continenteMasHabitantes="asia es el continente con mas habitantes";
	} else {
		continenteMasHabitantes="oceania es el continente con mas habitantes";
	}		
	}		
	}		
	}

	document.write("hay "+cantidadTemperaturaPares+" temperaturas pares"+"<br>");
	if (cantidadHabitantesEuropa!=0) {
		document.write("hay "+contadorTemperaturaImparEuropa+" temperaturas impares en europa"+"<br>");
	} else {
		document.write("no se ingresaron paises europeos"+"<br>");
	}

	document.write(paisMenosHabitantes+" es el pais con menos habitantes"+"<br>");

	if (cantidadPaisesMas40=!0) {
		document.write("hay "+cantidadPaisesMas40+" paises que superan los 40°"+"<br>");
		document.write("hay un promedio de "+promedioHabitantesMas40+" habitantes entre los paises que superan los 40°"+"<br>");		
	} else {
		document.write("no se ingresaron paises con temperatura superior a 40°"+"<br>");
	}

	if (cantidadPaisesAmericaMenos0=!0) {
		document.write("hay "+cantidadPaisesAmericaMenos0+" paises de america que tienen una temperatura inferior a 0°"+"<br>");		
	} else {
		document.write("no se ingresaron de america con temperatura inferior a 0"+"<br>");
	}
	
	document.write("hay un promedio de "+promedioHabitantes+" habitantes por pais"+"<br>");

	document.write("con "+temperaturaMInima+"° "+paisMenorTemperatura+" es el pais con menor temperatura"+"<br>");
	
	document.write(continenteMasHabitantes+"<br>");


}













































































































/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.X
b) Cuantos mayores de edad estan viudosX
c) La cantidad de hombres que hay solteros o viudos.X
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperaturaX
e) El promedio de edad entre los hombres solteros.X
*/
// Taboada Ezequiel 1°D
/*function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoMatrimonial;
	let temperatura;
	let tempereturaMayor;
	let nombreTemperatura;
	let seguir;
	let promedioEdadSolteros;
	let mayoresViudos;
	let hombresNocasados;
	let solteros;
	let edadSolteros;
	let ancianosTemperatura;
	let flag;

	mayoresViudos=0;
	hombresNocasados=0;
	solteros=0;
	edadSolteros=0;
	ancianosTemperatura=0;
	flag=0;
	seguir=true;


	while (seguir==true) {
		nombre=prompt("ingrese el nombre");
		while (isNaN(nombre)==false) {
			nombre=prompt("Nombre invalido!!! Reingrese el nombre");		
		}

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
}*/