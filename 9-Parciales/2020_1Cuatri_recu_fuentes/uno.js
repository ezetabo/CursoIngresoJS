/*"super chino" :
 Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY 
a)  el NOMBRE del mas pesado de los comestibles
b)  el NOMBRE del  mas caro de todos los productos
c)  el NOMBRE del  mas barato de los elaborados
d)  de los Productos nacionales con stock , el promedio de precio
e)  el tipo de mercadería  que mas aparece
f)  el porcentaje de productos elaborados por sobre el total
g)  el promedio de pesos por cada tipo ingresado
h)  cual es el tipo con mayor promedio de pesos
i)  el importe total de la compra para productos nacionales que pesen entre 10 y 20 kg (ambos inclusive)
h)  De los tipos de stock , cual tiene mas productos nacionales*/

//Taboada Ezequiel 1°D

function mostrar(){

	let producto;
	let nombre;
	let precio;
	let tipoDeStock;
	let procedencia;
	let peso;
	let pesoMasPesado;
	let nombreMasPesado;
	let precioMascaro;
	let nombreMasCaro;
	let precioMasBarato;
	let nombreMasBarato;
	let mayorStockNacional;
	let acumuladorPrecioNacional;
	let mercaderiaMasAparece;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;
	let contadorElaborados;	
	let porcentajeElaborados;
	let acumuladorPesoLimpieza;
	let acumuladorPesoComestible;
	let acumuladorPesoOtros;
	let mayorPromedioPeso;
	let acumuladorImporteNacional10y20Kg;	
	let seguir;
	let contadorSinStockNacional;
	let contadorStockNacional;
	let contadorPedidoNacional;
	let flagProducto;
	let promedioPrecioNacional;
	let totalNacional;
	let totalProductos;
	let promedioPesoComestible;
	let promedioPesoLimpieza;
	let promedioPesoOtros;
	
	
	flagProducto=0;
	contadorSinStockNacional=0;
	contadorStockNacional=0;
	contadorPedidoNacional=0;
	contadorLimpieza=0;
	contadorComestible=0;
	contadorOtros=0;
	contadorElaborados=0;	
	acumuladorPesoLimpieza=0;
	acumuladorPesoComestible=0;
	acumuladorPesoOtros=0;
	acumuladorPrecioNacional=0;
	
	
	do {
		producto=prompt("Ingrese el producto","limpieza , comestible , otros");
		producto=producto.toLowerCase();
		while (producto!="limpieza" && producto!="comestible" && producto!="otros") {
			producto=prompt("producto invalido!!  reingrese el producto","limpieza , comestible , otros");     
		}

		nombre=prompt("ingrese el nombre");
		while (isNaN(nombre)==false) {
			nombre=prompt("Nombre invalido!!! Reingrese el nombre");	
		}

		precio=parseFloat(prompt("ingrese el precio","maximo 1000"));
		while (isNaN(precio) || (precio<0 || precio>300)) {
			precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio","minimo 100 maximo 300"));			
		}

		procedencia=prompt("Ingrese la procedencia","importado, nacional, elaborado");
		procedencia=procedencia.toLowerCase();
		while (procedencia!="importado" && procedencia!="nacional" && procedencia!="elaborado") {
			procedencia=prompt("procedencia invalida!!  reingrese la procedencia","importado, nacional, elaborado");     
		}

		tipoDeStock=prompt("Ingrese el tipoDeStock","pedido , con sotck , sin stock");
		tipoDeStock=tipoDeStock.toLowerCase();
		while (tipoDeStock!="pedido" && tipoDeStock!="con sotck" && tipoDeStock!="sin stock") {
			tipoDeStock=prompt("tipoDeStock invalido!!  reingrese el tipoDeStock","pedido , con sotck , sin stock");     
		}

		peso=parseFloat(prompt("ingrese el peso","maximo 30"));
		while (isNaN(peso) || (peso<0 || peso>=30)) {
			peso=parseFloat(prompt("Peso incorrecto!!!  Reingrese el peso","maximo 30"));			
		}
		if (flagProducto==0 || precio>precioMascaro) {
			precioMascaro=precio;
			nombreMasCaro=nombre;
		}


		switch (procedencia) {
			case "elaborado":
				contadorElaborados++;
				if (contadorElaborados==1|| precio<precioMasBarato) {
					precioMasBarato=precio;
					nombreMasBarato=nombre;
				}
				break;	
			
			case "nacional":			
				if (peso<10 || peso>20) {
					acumuladorImporteNacional10y20Kg+=precio;					
				}
				switch (tipoDeStock) {
					case "con sotck":
						contadorStockNacional++;
						acumuladorPrecioNacional+=precio;						
						break;

					case "pedido":
						contadorPedidoNacional;;
						break;

					case "sin stock":
						contadorSinStockNacional++;
						break;		
					
				}
				break;		
			
		}

		switch (producto) {
			case "comestible":
				contadorComestible++;
				if (contadorComestible==1 || peso<pesoMasPesado) {
					pesoMasPesado=peso;
					nombreMasPesado=nombre;
				}
				acumuladorPesoComestible+=peso;
				break;
			case "limpieza":
				contadorLimpieza++;
				acumuladorPesoLimpieza+=peso;
				break;
			case "otros":
				contadorOtros++;
				acumuladorPesoOtros+=peso;
				break;		
			
		}	

		flagProducto=1;
		seguir=confirm("¿quiere ingresar otro producto?");

	} while (seguir==true);

	totalNacional=contadorStockNacional+contadorPedidoNacional+contadorSinStockNacional;
	totalProductos=contadorComestible+contadorLimpieza+contadorOtros;
	promedioPrecioNacional=acumuladorPrecioNacional/contadorSinStockNacional;
	porcentajeElaborados=contadorElaborados*100/totalProductos;
	promedioPesoComestible=acumuladorPesoComestible/contadorComestible;
	promedioPesoLimpieza=acumuladorPesoLimpieza/contadorLimpieza;
	promedioPesoOtros=acumuladorPesoOtros/contadorOtros;

	if (contadorComestible>contadorLimpieza && contadorComestible>contadorOtros) {
		mercaderiaMasAparece=" los productos comestibles son los que mas aparecen";
	} else {if (contadorLimpieza>contadorOtros) {
		mercaderiaMasAparece=" los productos de limpieza son los que mas aparecen";
	} else {
		mercaderiaMasAparece=" los productos del tipo otros son los que mas aparecen";
	}		
	}
	if (promedioPesoComestible>promedioPesoLimpieza && promedioPesoComestible>promedioPesoOtros) {
		mayorPromedioPeso=" los productos comestibles son los de mayor peso promedio  ";
	} else {if (promedioPesoLimpieza>promedioPesoOtros) {
		mayorPromedioPeso=" los productos de limpieza son los de mayor peso promedio ";
	} else {
		mayorPromedioPeso=" los productos del tipo otros son los de mayor peso promedio ";
	}		
	}
	if (contadorStockNacional>contadorPedidoNacional && contadorStockNacional>contadorSinStockNacional) {
		mayorStockNacional=" hay mayor cantidad de productos en stock";
	} else {if (contadorPedidoNacional>contadorSinStockNacional) {
		mayorStockNacional=" hay mayor cantidad de productos en pedido";
	} else {
		mayorStockNacional=" hay mayor cantidad de productos sin stock";
	}	
	
	document.write(nombreMasCaro+" es el mas cosos todos los productos"+"<br>");

	document.write(mercaderiaMasAparece+"<br>");

	document.write(mayorPromedioPeso+"<br>");

	if (contadorComestible!=0) {
		document.write(nombreMasPesado+" es el mas pesado de los comestibles"+"<br>");
		document.write(promedioPesoComestible+"kg es el promedio de peso de los comestibles"+"<br>");		
	} else {
		document.write("no se ingresaron comestibles"+"<br>");		
	}

	if (contadorLimpieza!=0) {
		document.write(promedioPesoLimpieza+"kg es el promedio de peso de los productos de limpieza"+"<br>");		
	} else {
		document.write("no se ingresaron productos de limpieza"+"<br>");
	}

	if (contadorOtros!=0) {
		document.write(promedioPesoOtros+"kg es el promedio de peso de los productos tipo otros"+"<br>");		
	} else {
		document.write("no se ingresaron productos del tipo otros"+"<br>");
	}

	if (contadorElaborados!=0) {
		document.write(nombreMasBarato+" es el mas barato de los elaborados"+"<br>");	
		document.write(porcentajeElaborados+"% es el porcentaje de productos elaborados por sobre el total"+"<br>");
		
	} else {
		document.write("no se ingresaron productos de procedencia elaborados"+"<br>");		
	}
	
	if (totalNacional!=0) {
		document.write(mayorStockNacional+"<br>");
		if (contadorStockNacional!=0) {
			document.write("$"+promedioPrecioNacional+" es el precio promedio de los Productos nacionales con stock"+"<br>");			
		} else {
			document.write("no hay en stock productos de procedencia nacional"+"<br>");		
		}if (condition) {
			document.write(acumuladorImporteNacional10y20Kg+" es el importe total de productos nacionales que pesan entre 10 y 20 kg"+"<br>");			
		} else {
			document.write("no se ingresaron productos nacionales que pesan entre 10 y 20 kg"+"<br>");		
		}		
	} else {
		document.write("no se ingresaron productos de procedencia nacional"+"<br>");		
	}	
	

}






















































































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
/*function mostrar()
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

}*/
