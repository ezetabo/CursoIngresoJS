/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
9 BIS: Ingresar 10 números distintos de cero. 
Determinar de los pares el menor y de los negativos el mayor.*/

//Taboada Ezequiel 1°D
function mostrar()
{	
	let numeroIngresado;
	let paresMenor;
	let negativosMayor;		
	let i=0;
	let flagPAr=0;
	let flagNegativo=0;
	
	
	while (i<10) {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		while (isNaN(numeroIngresado) || numeroIngresado==0) {
			numeroIngresado=prompt("Numero incorrecto!!! reingrese un numero");
		}
		if ((numeroIngresado %2==0 && flagPAr==0) || (numeroIngresado %2==0 && numeroIngresado < paresMenor)) {
			paresMenor=numeroIngresado;
			
			flagPAr=1;
		}
		if ((numeroIngresado<0 && flagNegativo==0) ||(numeroIngresado<0 && numeroIngresado > negativosMayor)) {
			
			negativosMayor=numeroIngresado;
			
			flagNegativo=1;
		}
		i++;				
	}

	if (flagNegativo==1) {
		txtIdMaximo.value="el mayor de los negativos es: "+negativosMayor;			
	}else{
		txtIdMaximo.value="no se ingresaron negativos";		
	} 

	if (flagPAr==1) {
		txtIdMinimo.value="el menor de los pares es: "+paresMenor;			
	}else{
		txtIdMinimo.value="no se ingresaron pares";		
	} 
	
}


/*let seguir=true;
let maximo; 
let minimo;
let flag=0;
do {
	if (flag==0 || numero>maximo) {
		maximo=numero;			
	}
	if (flag==0 || numero<minimo) {
		minimo=numero;			
	}
	flag=1;
	
	seguir=confirm("¿Quiere ingresar otro numero?");
} while (seguir==true);*/