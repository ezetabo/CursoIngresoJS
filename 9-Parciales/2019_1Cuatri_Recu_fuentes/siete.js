/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar()
{
    let sexo;
    let altura;
    let altBaja;
    let sexoBajaAlt;
    let promedioAlt;
    let sumaAlturas=0;
    let cantAlturas=0;
    let mujeresAltas=0;
    let flag=0;
    let i=0;

    while (i<5) {
        sexo=prompt("Ingrese el sexo:","'m' para masculino y 'f'para femenino");
        sexo=sexo.toLowerCase();
		while (sexo!='f' && sexo!='m') {
			sexo=prompt("Sexo invalido!!!, reingrese el sexo:","'m' para masculino y 'f'para femenino");
            sexo=sexo.toLowerCase();		
		}  
        altura=parseInt(prompt("Ingrese la altura","en centimetros"));
		while (isNaN(altura) || altura>0 || altura<250) {
			altura=prompt("altura invalida!!!, reingrese la altura","en centimetros");
		}
        sumaAlturas+=altura;
        cantAlturas++;

        if (altura>190 && sexo=='f') {
            mujeresAltas++;            
        }

        if (flag==0 || altura<altBaja) {
            altBaja=altura;
            sexoBajaAlt=sexo; 
            if (sexoBajaAlt=='f') {
                sexoBajaAlt="Femenino";
            } else {
                sexoBajaAlt="Masculino";                
            }
            flag=1;        
        }
        i++;
    }

    promedioAlt=sumaAlturas/cantAlturas;

    console.log("El promedio de las alturas totales es de: "+promedioAlt+"cm");
    console.log("La altura más baja es "+altBaja+"cm"+" y el sexo de esa persona es "+sexoBajaAlt);
    console.log("La cantidad de mujeres que superan los 190 centimetros son "+mujeresAltas);




}
