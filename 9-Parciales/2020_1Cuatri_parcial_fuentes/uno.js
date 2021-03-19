/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	
	let producto
	let unidades;
	let marca;
	let fabricante;
	let precio;
	let alcoBarato;
	let fabriAlcoBarato;
	let promedio;
	let mensajeProducto;
	let unidAlcoBarato;
	let cantJabones;
	let cantAlco;
	let cantBarbi;	
	let barbijo;
	let jabon;
	let alcohol;
	let i;
	
	unidAlcoBarato=0;
	cantJabones=0;
	cantAlco=0;
	cantBarbi=0;	
	barbijo=0;
	jabon=0;
	alcohol=0;
	
	for (i=0;i<5;i++ ) {
		producto=prompt("Ingrese el producto","'B-barbijo' 'J-jabon' 'A-alcohol'");
		producto=producto.toLowerCase();
		while (producto!='b' && producto!='j' && producto!='a') {
			producto=prompt("producto invalido!!  reingrese el producto");     
		}

		precio=parseFloat(prompt("ingrese el precio"));
		while (isNaN(precio) || (precio<100 || precio>300)) {
			precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio"));			
		}
		unidades=parseFloat(prompt("ingrese las unidades"));
		while (isNaN(unidades) || (unidades<0 || unidades>1000)) {
			unidades=parseFloat(prompt("Unidad incorrecta!!!  Reingrese las unidades"));			
		}
		
		fabricante=prompt("Ingrese el fabricante");
		marca=prompt("Ingrese la marca");


		switch (producto) {
			case "a":
				cantAlco+=unidades;  
				alcohol++;
				if (alcohol==1 || precio<alcoBarato) {
					alcoBarato=precio;
					fabriAlcoBarato=fabricante;
					unidAlcoBarato+=unidades; 
				}     
				break;

			case "b":
				cantBarbi+=unidades;
				barbijo++;
				
				break;
		
			default:
				cantJabones+=unidades; 
				jabon++;      
				break;
		}

	}
	
	if (cantAlco>cantJabones && cantAlco>cantBarbi) {
		mensajeProducto="hay mas cantidad de Alcohol";
		promedio=cantAlco/alcohol;
		
	  } else {if (cantBarbi>cantJabones) {
		mensajeProducto="hay mas cantidad de Barbijo";
		promedio=cantBarbi/barbijo;
		
	  } else {
		mensajeProducto="hay mas cantidad de Jabon";
		promedio=cantJabones/jabon;
	  }    
	  }
	if (alcohol!=0) {
		console.log("hay "+unidAlcoBarato+" unidades de alcohol mas barato y el fabricante es "+fabriAlcoBarato);
		
	} else {
		console.log("no se ingresaron productos del tipo Alcohol");
	}
	console.log(mensajeProducto+" y el promedio por compra es "+promedio+" unidades");

	if (jabon!=0) {
		console.log("En total hay "+cantJabones+" unidades de jabon");		
	} else {
		console.log("no se ingresaron productos del tipo Jabon");	
	}

}
















































































































































/*
repetir 5 veces
	pedir tipo y validar (barbijo-jabon-alcohol)
	pedir precio y validar(entre 100 y 300)
	pedir cantidad y validar(1-1000)
	pedir Marca y pedir fabricante (se peuden pedir con isNaN)

	preguntar si el tipo es alcohol
		pregunto si ese alcohol es el mas barato
		(X)	guardar cantidad de unidades del mas barato
		(X)	guardar el fabricante del mas barato
			guardar el precio del alcohol mas barato
		fin si
	fin si

	preguntar
		si es jabon
			contar veces qie se compro jabon
			acumulo las cantidades
		si es barbijo
			contar las veces que se compro barbijos
			acumulo las cantidades
		si es alcohol
			contar las veces que se compro alcohol
			acumulo las cantidades



termino de repetir


preguntar si la cantidad de jabones es mayor a la cantidad de barbijo y ademas a la cantidad de alcoholes
	calculo promedio para jabones
sino y la cantidad de barbijos es mayor
	calculo promedio para barbijos
sino
	calculo el promedio para alcoholes
fin de preguntar

function mostrar()
{
	let barbijo;
	let alcohol;
	let jabon;
}*/
