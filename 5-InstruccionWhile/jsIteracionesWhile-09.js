/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let seguir='s';
	let flag=0;

	do {
		numero=parseInt(prompt("ingrese un numero"));
		if (flag==0) {
			maximo=numero;
			minimo=numero;
			flag=1;			
		}
		if (numero>maximo) {
			maximo=numero;			
		} else {if (numero<minimo) {
			minimo=numero;			
		}			
		}
		seguir=prompt("¿Quiere ingresar otro numero?");
	} while (seguir=='s');

	txtIdMaximo.value="el numero maximo es: "+maximo;
	txtIdMinimo.value="el numero minimo es: "+minimo;
}

/*
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
	txtIdMinimo.value=numeroMinimo;*/