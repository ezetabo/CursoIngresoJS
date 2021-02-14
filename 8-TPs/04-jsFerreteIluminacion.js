/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
 y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y 
si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto
 con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
 //Ezequiel Taboada 1°D
 
function CalcularPrecio () 
{
	let precio;
 	let cantidadLamparas;
 	let marcaLampara;
 	let descuento; 	
 	let precioBruto; 	
 	let precioConDescuento;
 	let iibb;
 	let precioConIibb;

 	precio=35; 
 	cantidadLamparas=txtIdCantidad.value; 		
 	marcaLampara=document.getElementById("Marca").value; 	
 	cantidadLamparas=parseInt(cantidadLamparas);

 	switch(cantidadLamparas)
 	{
 		case 1:
 			descuento=0;
 			break;

 		case 2:
 			descuento=0;
 			break;

 		case 3:
 		if(marcaLampara=="ArgentinaLuz")
 		{
 			descuento=15;
 		}
 		else
 		{
 			if(marcaLampara=="FelipeLamparas")
 			{
 				descuento=10;
 			}
 			else
 			{
 				descuento=5;
 			}
 		}
 			break;

 		case 4:
 		if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
 		{
 			descuento=25;
 		}
 		else
 		{
 			descuento=20;
 		}
 			break;

 		case 5:
 		if(marcaLampara=="ArgentinaLuz")
 		{
 			descuento=40;
 		}
 		else
 		{
 			descuento=30;
 		}

 			break;

 		default:
 		descuento=50;
 	}

 	precioBruto=cantidadLamparas*precio;
 	precioConDescuento=precioBruto-precioBruto*descuento/100;

 	txtIdprecioDescuento.value=precioConDescuento;
 	if(precioConDescuento > 120 )
 	{
 		iibb=precioConDescuento*10/100;
 		precioConIibb=iibb+precioConDescuento; 	

 		txtIdprecioDescuento.value=precioConIibb;

 		alert("Usted pago $"+iibb+" de IIBB");
 	}
}


