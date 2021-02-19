
function mostrar()
{
	let numeroIngresado;
	let negativos=0;
	let positivos=0;
	let ceros=0;
	let pares=0;
	let acumuladorPositivos=0;
	let acumuladorNegativos=0;
	let promedioPositivos=0;
	let promedioNegativos=0;
	let diferencia;
	let respuesta='S';
	
	do {
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado>0) {
			
			positivos=positivos+numeroIngresado;
			acumuladorPositivos=acumuladorPositivos+1;
			
			
		} else {if (numeroIngresado<0) {

			negativos=negativos+numeroIngresado;
			acumuladorNegativos=acumuladorNegativos+1;
			
		} else {
			ceros=ceros+1;
			
		}
			
		}
		if (numeroIngresado % 2 ==0 ) {

			pares=pares+1;
			
		}

		respuesta=prompt("¿Quiere ingresar otro numero?");
	} while (respuesta=='s');

	if (acumuladorNegativos>0) {
		
		promedioNegativos=negativos/acumuladorNegativos;
	}
	if (acumuladorPositivos>0) {
		
		promedioPositivos=positivos/acumuladorPositivos;
	}
	diferencia=positivos+negativos;


	console.log("1-Suma de los negativos: "+negativos);
	console.log("2-Suma de los positivos: "+positivos);
	console.log("3-Cantidad de positivos: "+acumuladorPositivos);
	console.log("4-Cantidad de negativos: "+acumuladorNegativos);
	console.log("5-Cantidad de ceros: "+ceros);
	console.log("6-Cantidad de números pares: "+pares);
	console.log("7-Promedio de positivos: "+promedioPositivos);
	console.log("8-Promedios de negativos: "+promedioNegativos);
	console.log("9-Diferencia entre positivos y negativos: "+diferencia);

}