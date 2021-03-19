/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal
y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano*/

//Taboada Ezequiel 1°D

function mostrar()
{
  let tipoDeAnimal;
  let tipoDePelo;
  let edad;
  let nombre;
  let raza;
  let peso;
  let estadoClinico;
  let temperatura;
  let seguir;
  let contadorPerros;
  let contadorGatos;
  let contadorOtros;
  let perroMaspesado;
  let nombrePerroPesado;
  let acumuladorPeso;
  let promedioPeso;
  let temperarutaPerros;
  let temperarutaGatos;
  let temperarutaOtros; 
  let ultimoOtros;
  let porcentajePerrosGatos;
  let contadorEnfermos;
  let contadorInternados;
  let contadorAdopcion;
  let porcentajeEnfermos;
  let pesoGatoSinPelo;
  let nombreGatoSinPelo;
  let razaGatoSinPelos;
  let menorTemperaturaSinPelos;
  let flagTemperatura;
  let animalMenorTemperaturaSinPelo;
  let contadorSinPelos;
  let menorEstadoClinico;
  let tipoMayorPromedioTemperatura;
  let totalAnimales;
  let totalEstadoClinico;
  

  contadorPerros=0;
  contadorGatos=0;
  contadorOtros=0;
  acumuladorPeso=0;
  temperarutaPerros=0;
  temperarutaGatos=0;
  temperarutaOtros=0;
  contadorEnfermos=0;
  contadorInternados=0;
  contadorAdopcion=0;
  flagTemperatura=0;
  contadorSinPelos=0;

  do {

    tipoDeAnimal=prompt("ingrese el tipo de animal","gato , perro u otros");
		tipoDeAnimal=tipoDeAnimal.toLocaleLowerCase();		
		  while (tipoDeAnimal!="gato" && tipoDeAnimal!="perro" && tipoDeAnimal!="otros") {
        tipoDeAnimal=prompt("Tipo incorrecto!! Reingrese el tipo de animal","gato , perro u otros");
        tipoDeAnimal=tipoDeAnimal.toLocaleLowerCase();
      }	

    nombre=prompt("ingrese el nombre");
		while (isNaN(nombre)==false) {
			nombre=prompt("Nombre invalido!!! Reingrese el nombre");	
		}

    raza=prompt("ingrese el nombre");
		while (isNaN(raza)==false) {
			raza=prompt("Nombre invalido!!! Reingrese el nombre");	
		}

    edad=parseInt(prompt("ingrese la edad"));
				while (isNaN(edad) || edad<1 ) {
					edad=parseInt(prompt("dato invalido!! reingrese la edad"));		
        }
    peso=parseFloat(prompt("ingrese el peso"," en kg"));
				while (isNaN(peso) || peso<1 ) {
					peso=parseFloat(prompt("dato invalido!! reingrese el peso","en kg"));			
				}

    tipoDePelo=prompt("Ingrese el tipo de pelo:","corto, largo , sin pelo");
    tipoDePelo=tipoDePelo.toLowerCase();
      while (tipoDePelo!='corto' && tipoDePelo!='largo' && tipoDePelo!='sin Pelo') {
        tipoDePelo=prompt("Dato invalido!!!, reingrese el tipo de pelo:","corto, largo , sin pelo");
        tipoDePelo=tipoDePelo.toLowerCase();		
      }
    estadoClinico=prompt("Ingrese el estado clinico:","enfermo,internado o adopcion");
    estadoClinico=estadoClinico.toLowerCase();
      while (estadoClinico!='enfermo' && estadoClinico!='internado' && estadoClinico!='adopcion') {
        estadoClinico=prompt("Estado invalido!!!, reingrese el estado clinico:","enfermo,internado o adopcion");
        estadoClinico=estadoClinico.toLowerCase();		
      }

    temperatura=parseFloat(prompt("ingrese la temperatura"));
      while (isNaN(temperatura) || (temperatura<35 || temperatura>43)) {
        temperatura=parseFloat(prompt("Temperatura erronea!!!  Reingrese la temperatura"));			
      }

      acumuladorPeso+=peso;
      contadorSinPelos++;

      if (tipoDeAnimal=="otros") {
        ultimoOtros=nombre;
      }

      switch (estadoClinico) {
        case "enfermo":
          contadorEnfermos++;
          break;

        case "internado":
          contadorInternados++;
          break;
      
        default:
          contadorAdopcion++;
          break;
      }
  
     
    if ((flagTemperatura==0 && tipoDePelo=="sin Pelo") || temperatura<menorTemperaturaSinPelos) {
      menorTemperaturaSinPelos=temperatura;
      animalMenorTemperaturaSinPelo=tipoDeAnimal;
    }

   switch (tipoDeAnimal) {
     case "perro":
       contadorPerros++;
       temperarutaPerros+=temperatura;

       if (contadorPerros==1 || peso>perroMaspesado) {
         perroMaspesado=peso;
         nombrePerroPesado=nombre;
       }

       break;

     case "gato":
       contadorGatos++;
       temperarutaGatos+=temperatura;

       if ((tipoDePelo=="sin Pelo" && contadorGatos==1) ||(tipoDePelo=="sin Pelo" && peso<pesoGatoSinPelo)) {
         pesoGatoSinPelo=peso;
         nombreGatoSinPelo=nombre;
         razaGatoSinPelos=raza;
       }

       break;
   
     default:
       contadorOtros++;
       temperarutaOtros+=temperatura


       break;
   }

    flagTemperatura=1;
    
  } while (seguir==true);

  totalAnimales=contadorGatos+contadorPerros+contadorOtros;

  totalEstadoClinico=contadorEnfermos+contadorInternados+contadorAdopcion;

  porcentajePerrosGatos=(contadorPerros+contadorGatos)*100/totalAnimales;

  promedioPeso=acumuladorPeso/totalAnimales;

  porcentajeEnfermos=contadorEnfermos*100/totalEstadoClinico;


  if (contadorInternados<contadorEnfermos && contadorInternados<contadorAdopcion) {
    menorEstadoClinico="internados es el estado clinico con menor cantidad de mascotas";
  } else {if (contadorEnfermos<contadorAdopcion) {
    menorEstadoClinico="enfermos es el estado clinico con menor cantidad de mascotas";
  } else {
    menorEstadoClinico=" adopcion es el estado clinico con menor cantidad de mascotas";
  }  
  }

  if (temperarutaPerros>temperarutaGatos && temperarutaPerros>temperarutaOtros) {
    tipoMayorPromedioTemperatura="los perros tienen mayor promedio de temperatura";
  } else {if (temperarutaGatos>temperarutaOtros) {
    tipoMayorPromedioTemperatura="los gatos tienen mayor promedio de temperatura";
  } else {
    tipoMayorPromedioTemperatura="los tipo Otros tienen mayor promedio de temperatura";
  }  
  }

  if (contadorPerros!=0) {
    document.write("el perro mas pesado es "+nombrePerroPesado+"<br>"); 
  } else {
    document.write("no se ingresaron perros"+"<br>");
  }

  if (contadorOtros!=0) {
    document.write("el nombre de la ultima mascota del tipo otros es  "+ultimoOtros+"<br>");
  } else {
    document.write("no se ingresaron animales del tipo otros"+"<br>");
  }
  if (contadorSinPelos!=0) {
    document.write("el animal sin pelos con la menor temperatura es del tipo "+animalMenorTemperaturaSinPelo+"<br>");    
  } else {
    document.write("no se ingresaron animales sin pelo "+"<br>");  
  }
  if (contadorGatos!=0) {
    document.write(nombreGatoSinPelo+" es el nombre del gato sin pelo mas liviano y su raza es "+razaGatoSinPelos+"<br>");

  } else {
    document.write("no se ingresaron gatos"+"<br>");

  }
  document.write(menorEstadoClinico+"<br>");

  document.write(tipoMayorPromedioTemperatura+"<br>");

  document.write("sobre el total de animales un "+porcentajePerrosGatos+"% son perros y gatos"+"<br>");

  document.write("el promedio de peso entre todos los animales es de "+promedioPeso+" kilos" +"<br>");

  document.write("un "+porcentajeEnfermos+"% de todos los animales esta enfermo" +"<br>");

}


































































































/*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/
//Taboada Ezequiel 1°D
/*
function mostrar()
{
  let seguir;
  let producto;
  let precio;
  let bolsas;
  let acumuladorArena;
  let acumuladorCal;
  let acumuladorCemento;
  let flagProd;
  let tipoMasCaro;
  let descuento;
  let precioTotal;
  let precioConDescuento;
  let cantidadBolsas;
  let acumuladorCostoArena;
  let acumuladorCostoCal;
  let acumuladorCostoCemento;
  let costoArena;
  let costoCal;
  let costoCemento;
  let tipoMasbolsas;

  acumuladorArena=0;
  acumuladorCal=0;
  acumuladorCemento=0;
  flagProd=0;
  descuento=0;
  acumuladorCostoArena=0;
  acumuladorCostoCal=0;
  acumuladorCostoCemento=0;


  do {

    producto=prompt("Ingrese el producto","cal - arena - cemento");
      producto=producto.toLowerCase();
      while (producto!="cal" && producto!="arena" && producto!="cemento") {
        producto=prompt("producto invalido!!  reingrese el producto");     
      }
      
      precio=parseFloat(prompt("ingrese el precio"));
      while (isNaN(precio)|| precio<0) {
        precio=parseFloat(prompt("Precio erroneo!!!  Reingrese el Precio"));			
      }

      bolsas=parseInt(prompt("Ingrese cantidad de bolsas"));
      while (isNaN(bolsas)|| bolsas<0) {
        bolsas=parseInt(prompt("cantidad invalida!! Ingrese cantidad de bolsas"));       
      }

      switch (producto) {
        
        case "arena":
          acumuladorArena+=bolsas;          
          costoArena=precio*bolsas;
          acumuladorCostoArena+=costoArena;
          break;

        case "cal":
          acumuladorCal+bolsas;
          costoCal=precio*bolsas;
          acumuladorCostoCal+=costoCal;
          break;
      
        default:
          acumuladorCemento+=bolsas;
          costoCemento=precio*bolsas;
          acumuladorCostoCemento+=costoCemento
          break;
      }

      if (flagProd==0 || precio>tipoMasCaro) {
        tipoMasCaro=producto;                
      }
      flagProd=1;  

      seguir=confirm("¿quiere seguir comprando?");

  } while (seguir==true);

  
  if (cantidadBolsas>10 || cantidadBolsas<30) {
    descuento=15;
  } else {if (cantidadBolsas>30) {
    descuento=25;
  }      
  }
  cantidadBolsas=acumuladorArena+acumuladorCal+acumuladorCemento;
  precioTotal=acumuladorCostoArena+acumuladorCostoCal+acumuladorCemento;
  precioConDescuento=precioTotal-precioTotal*descuento/100;

  if (acumuladorArena>acumuladorCemento && acumuladorArena>acumuladorCal) {
    tipoMasbolsas="Arena";
  } else {if (acumuladorCemento>acumuladorCal) {
    tipoMasbolsas="Cemento";
  } else {
    tipoMasbolsas="cal";
  }    
  }

  document.write("El importe total a pagar es $"+precioTotal+"<br>");  
  if (descuento!=0) {
    document.write("El importe a pagar con un "+descuento+"%  de desceunto es $"+precioConDescuento+"<br>");    
  }

  document.write("El producto con mas bolsas es "+tipoMasbolsas+"<br>");  
  document.write("El producto con mas caro es "+tipoMasCaro+"<br>");  

}
*/