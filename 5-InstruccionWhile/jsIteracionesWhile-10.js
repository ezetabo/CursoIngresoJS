
function mostrar()
{
	let numeroIngresado;
	let seguir='s';
	let sumaNegativos=0;
	let sumaPositivos=0;
	let negativos=0;
	let positivos=0;
	let ceros=0;
	let pares=0;
	let promedioNegativos=0;
	let promedioPositivos=0;
	let diferencia;

	do {
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		if (numeroIngresado>0) {
			sumaPositivos+=numeroIngresado;
			positivos++;
		}
		 else{
			  if (numeroIngresado<0) {
				  sumaNegativos+=numeroIngresado;
				  negativos++;
				}
				 else{			
					  ceros++;
					}
			}
		if (numeroIngresado%2==0) {
			pares++;
		}

		seguir=prompt("¿Quiere ingresar otro numero?");
	} while (seguir=='s');

	diferencia=sumaPositivos+sumaNegativos;

	if (sumaNegativos>0) {		
		promedioNegativos=sumaNegativos/negativos;
	}
	if (sumaPositivos>0) {		
		promedioPositivos=sumaPositivos/positivos;
	}

	console.log("1-Suma de los negativos: "+sumaNegativos);
	console.log("2-Suma de los positivos: "+sumaPositivos);
	console.log("3-Cantidad de positivos: "+positivos);
	console.log("4-Cantidad de negativos: "+negativos);
	console.log("5-Cantidad de ceros: "+ceros);
	console.log("6-Cantidad de números pares: "+pares);
	console.log("7-Promedio de positivos: "+promedioPositivos);
	console.log("8-Promedios de negativos: "+promedioNegativos);
	console.log("9-Diferencia entre positivos y negativos: "+diferencia);
}
