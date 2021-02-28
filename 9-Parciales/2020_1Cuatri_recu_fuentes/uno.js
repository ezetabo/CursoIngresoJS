/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
//Taboada Ezequiel 1°D
function mostrar()
{
	let producto;
	let unidades;
	let marca;
	let fabricante;
	let precio;	
	let cantJabones=0;
	let cantAlcohol=0;
	let cantBarbijos=0;	
	let cantVentasJabon=0;
	let cantVentaAlcohol=0;
	let cantVentaBarbijos=0;	
	let jabonCaro;
	let cantJabonCaro;
	let fabricJabonCaro;
	let masVendido;
	let promedioMasVendido;
	
	let i=0;

	while (i<5) {

		producto=prompt("Ingrese el producto","barbijo , jabon , alcohol");
		producto=producto.toLowerCase();
		while (producto!="barbijo" && producto!="jabon" && producto!="alcohol") {
			producto=prompt("producto invalido!!  reingrese el producto","barbijo , jabon , alcohol");     
		}

		precio=parseFloat(prompt("ingrese el precio","minimo 100 maximo 300"));
		while (isNaN(precio) || (precio<100 || precio>300)) {
			precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio","minimo 100 maximo 300"));			
		}
		unidades=parseFloat(prompt("ingrese las unidades","entre 1 y 1000"));
		while (isNaN(unidades) || (unidades<0 || unidades>1000)) {
			unidades=parseFloat(prompt("Unidad incorrecta!!!  Reingrese las unidades","entre 1 y 1000"));			
		}
		
		fabricante=prompt("Ingrese el fabricante");
		marca=prompt("Ingrese la marca");

		switch (producto) {
			case "alcohol":
				cantAlcohol+=unidades;
				cantVentasJabon++;
				break;

			case "barbijo":
				cantBarbijos+=unidades;
				cantVentaBarbijos++;
				break;

			case "jabon":
				cantVentasJabon++;
				if (cantVentasJabon==1 || precio>jabonCaro) {
					jabonCaro=precio;
					cantJabonCaro=unidades;
					fabricJabonCaro=fabricante;					
				}
				cantJabones+=unidades;
				break;			
		}
		i++;

	}

	if (cantAlcohol>cantJabones && cantAlcohol>cantBarbijos) {
		masVendido="se vendio mas unidades de alcohol";
		promedioMasVendido=cantAlcohol/cantVentaAlcohol;
	
	} else {if (cantBarbijos>cantJabones) {
		masVendido="se vendio mas unidades de barbijo";
		promedioMasVendido=cantBarbijos/cantVentaBarbijos;
		
	} else {
		masVendido="se vendio mas unidades de jabon";
		promedioMasVendido=cantJabones/cantVentasJabon;		
	}  
	}

	promedioMasVendido=promedioMasVendido.toFixed(2);

	if (cantJabones!=0) {
		console.log(" el jabon mas caro es del fabricante "+fabricJabonCaro+" y se vendieron "+cantJabonCaro+" unidades");
	} else {
		console.log("no se vendieron jabones");
	}
	if (cantVentaBarbijos!=0) {
		console.log("se vendieron "+cantBarbijos+" unidades de barbijos");
	} else {
		console.log("no se vendieron barbijos");
	}

	console.log(masVendido+" con un promedio de "+promedioMasVendido+" unidades por compra");

}
