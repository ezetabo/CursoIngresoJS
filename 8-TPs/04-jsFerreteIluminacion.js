/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
 //Ezequiel Taboada 1°D
 
function CalcularPrecio () 
{
 	let cantidadLamparas;
 	let descuento50;
 	let descuento40;
 	let descuento30
 	let marcaLampara;
 	let precio;
 	let precioConDescuento;
 	let precioBruto;
 	let valor;

 	cantidadLamparas=txtIdCantidad.value;
 	precio=35; 	
 	marcaLampara=document.getElementById("Marca").value; 	
 	cantidadLamparas=parseInt(cantidadLamparas);

 	precioBruto=cantidadLamparas*precio;
 	descuento50=precioBruto*50/100;
 	descuento40=precioBruto*40/100;
 	descuento30=precioBruto*30/100;


 	if (cantidadLamparas > 5)
 	{
 		valor = precioBruto - descuento50;
 		txtIdprecioDescuento.value=valor;
 	}
 	else if (cantidadLamparas==5 && marcaLampara=="ArgentinaLuz")
 	{	
 		valor = precioBruto - descuento40;
 		txtIdprecioDescuento.value=valor;
 	} 	
 	else if(cantidadLamparas==5)
 	{
 		valor = precioBruto - descuento30;
 		txtIdprecioDescuento.value=valor;
 	}
 	else
 	{ 		
 		txtIdprecioDescuento.value=precioBruto;
 	}
}
