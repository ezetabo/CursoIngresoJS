/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    let letra;
    let numero;
    let maximo;
    let minimo;
    let ceros=0;
    let pares=0;
    let impares=0;
    let flag=0;
    let positivos=0;
    let negativos=0;
    let cantPositivos=0;
    let seguir=true;
    let promedioPositivos;
    let letraMax;
    let letraMin;

    do {
        letra=prompt("ingrese una letra");

        numero=parseInt(prompt("ingrese un numero"));
                while (isNaN(numero)||(numero<-100 || numero>100)) {
            numero=parseInt(prompt("Dato erroneo!!! reingrese un numero"));           
        }

        if (numero %2==0) {
            pares++;
        } else {
            impares++;
        }

        if (numero==0) {
            ceros++;
        }

        if (numero>=0) {
            positivos+=numero;
            cantPositivos++;     
        } else {
            negativos+=numero;            
        }
        
        if (flag==0 || numero<minimo) {
            minimo=numero;
            letraMin=letra;          
        }
        if (flag==0 || numero>maximo) {
            maximo=numero; 
            letraMax=letra;           
        }
        flag=1;
        seguir=confirm("¿quiere continuar?");

    } while (seguir==true);

    promedioPositivos=positivos/cantPositivos;  

    document.write("La cantidad de numeros pares es: "+pares+"<br>");
    document.write("La cantidad de numeros ceros es: "+ceros+"<br>");
    document.write("La cantidad de numeros impares es: "+impares+"<br>");
    document.write("El promedio de todos los números positivos es: "+promedioPositivos+"<br>");
    document.write("La suma de todos los números negativos: "+negativos+"<br>");
    document.write("La letra "+letraMax+" corresponde a "+maximo+" que es el numero maximo"+"<br>");
    document.write("La letra "+letraMin+" corresponde a "+minimo+" que es el numero minimo"+"<br>");




}
