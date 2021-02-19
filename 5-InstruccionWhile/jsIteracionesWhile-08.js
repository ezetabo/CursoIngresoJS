//Ezequiel Taboada 1°D
function mostrar()
{
	let respuesta="si";
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
	txtIdSuma.value=acumuladorPositivos;

}