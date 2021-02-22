/*(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los divido,
de lo contrario los sumo.
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y es menor a 50".*/

function mostrar()
{
    let numeroUno;
    let numeroDos;
    let suma;
    let division;
    let mensaje;
    
    numeroUno=parseInt(prompt("ingrese el 1° numero"));
    numeroDos=parseInt(prompt("ingrese el 2° numero"));

   if (numeroUno==numeroDos) {
       mensaje=numeroUno+" y "+numeroDos+" son iguales";

   } else {if (numeroUno>numeroDos) {
       division=numeroUno/numeroDos;
       division=division.toFixed(2); 
       mensaje="la division es igual a: "+division;
       
   } else {
       suma=numeroUno+numeroDos;
       if (suma<50) {
           mensaje="la suma es igual a: "+suma+" y es menor a 50";
           
       } else {
           mensaje="la suma es igual a: "+suma;
       }
   }
       
   }
    
   alert(mensaje);
   
}
