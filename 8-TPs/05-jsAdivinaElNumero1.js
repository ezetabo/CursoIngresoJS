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
  let numeroSecreto;
  let intentos=0;   

function comenzar()
{ 
  let maximo=100;
	let minimo=1;

  numeroSecreto=Math.round(Math.random() * (maximo - minimo) + minimo); 
}

function verificar()
{
  let numeroIngresado;

  numeroIngresado=parseInt(txtIdNumero.value);
  intentos++;
  txtIdIntentos.value="van "+intentos+" intentos";

  if (numeroIngresado<numeroSecreto) {
    alert("le falta...");
  } else {if (numeroIngresado>numeroSecreto) {
    alert("se paso...");     
  } else {
    alert("Usted es un ganador!!! y en solo "+intentos+" intentos");
  }
    
  }

}