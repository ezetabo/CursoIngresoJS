//Ezequiel Taboada 1°D
function mostrar()
{
	let numeros;
	let positivos=0;
	let negativos=1;
	let seguir=true;
	let flag=0;

	do {
		numeros=parseInt(prompt("Ingrese un numero"));
		if (numeros >= 0 ) {			
			positivos=positivos+numeros;			
		} else {
			flag=1;
			negativos=negativos*numeros;			
		}	
		seguir=confirm("¿Quiere ingresar otro numero?");
	} while (seguir==true);

	txtIdSuma.value="la suma es: "+positivos;

	if (flag==0) {
		negativos=0;
		txtIdProducto.value="El producto es: "+negativos;		
	}
	txtIdProducto.value="El producto es: "+negativos;
	
}

/*let respuesta="si";
	let acumuladorNegativos=1;
	let acumuladorPositivos=0;
	let numeroIngresado;
	let flag=0;

	do {
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		if (numeroIngresado>=0) {
			
			acumuladorPositivos=acumuladorPositivos+numeroIngresado;
		}else
		{	
			flag=1;
			acumuladorNegativos=acumuladorNegativos*numeroIngresado;
		}		
		
		respuesta = prompt("¿quiere ingresar otro numero?")

	} while (respuesta== "si");

	if(flag==0){
		acumuladorNegativos=0;
	}
	txtIdProducto.value=acumuladorNegativos;
	txtIdSuma.value=acumuladorPositivos;*/
