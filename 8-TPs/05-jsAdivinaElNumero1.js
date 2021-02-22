/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…” 
 del número secreto.
*/

function comenzar()
{
  let numeroSecreto;
  let maximo=100;
	let minimo=1;
  let numero;

  numero=Math.round(Math.random() * (maximo - minimo) + minimo);
  numeroSecreto=numero;
  
 
}

function verificar()
{
  let numeroIngresado;
  let intentos=0; 
  let numeroSecreto=30;
  
  numeroIngresado=parseInt(txtIdNumero.value);
	do {

    intentos++;
    if (numeroIngresado>numeroSecreto) {

      alert("se paso...");     
      numeroIngresado=parseInt(txtIdNumero.value); 

    } 
      alert("le falta...");

      numeroIngresado=parseInt(txtIdNumero.value);   
    
    
  } while (numeroIngresado!=numeroSecreto);

  alert("Usted es un ganador!!! y en solo "+intentos+" intentos");
	
}
