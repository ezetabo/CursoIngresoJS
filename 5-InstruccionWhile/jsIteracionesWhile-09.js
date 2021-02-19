/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let respuesta="si";
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let flag=0;
		

do {
	numeroIngresado=parseInt(prompt("ingrese un numero"));

	if (flag==0) {
		numeroMaximo=numeroIngresado;
		numeroMinimo=numeroIngresado;
		flag=1;
	}
	if (numeroIngresado>numeroMaximo) {
		numeroMaximo=numeroIngresado;

	} else {if (numeroIngresado < numeroMinimo) {
		numeroMinimo=numeroIngresado;
		
	}
		
	}
	
	respuesta = prompt("¿quiere ingresar otro numero?")

} while (respuesta== "si");

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}