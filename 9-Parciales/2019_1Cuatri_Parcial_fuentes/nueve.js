/*

//  Taboada Ezequiel 1°D





























































































































































/*function mostrar()
{
    let seguir=true;    //x
    let pais;           //x
    let temperatura;    //x
    let habitantes;     //x
    let cantHab=0;      //x
    let cantPaises=0;   //x
    let temPares=0;       //x
    let paisMenosHab;   //x
    let paisesTemp41;   //x
    let promedioHab;    
    let paisTempMenor;  //x
    let tempMin;        //x
    let flagHab=0;
    let flagTemp=0;

    while (seguir==true) {
        pais=prompt("ingrese el pais");
        
        temperatura=parseFloat(prompt("ingrese la temperatura"));
        while (isNaN(temperatura) || (temperatura<-50 || temperatura>50)) {
            temperatura=parseFloat(prompt("Temperatura erronea!!!  Reingrese la temperatura"));			
        }
        habitantes=parseInt(prompt("ingrese la cantidad de habitantes","en millones"));
        while (isNaN(habitantes) || (habitantes<1 || habitantes>7000)) {
            habitantes=parseInt(prompt("Cantidad erronea!!!  Reingrese la cantidad de habitantes"));			
        }
        if (temperatura %2==0) {
            temPares++;
        }
        if (flagHab==0 || habitantes<habitantesMenor) {
            paisMenosHab=pais;
            habitantesMenor=habitantes;
            flagHab=1;              
        }
        if (temperatura>40) {
            paisesTemp41++;            
        }
        
        if (flagTemp==0 || temperatura<tempMin) {
            tempMin=temperatura;
            paisTempMenor=pais;                       
        }
        
        cantHab+=habitantes;
        cantPaises++;   

        seguir=confirm("¿Quiere ingresar otro pais?");
	}

    promedioHab=cantHab/cantPaises;
    promedioHab=promedioHab.toFixed(2);

    document.write("La cantidad de temperaturas pares son: "+temPares+"<br>");
    document.write(paisMenosHab+" con  "+habitantesMenor+" millones de habitantes, es el pais de menor poblacion"+"<br>");
    document.write("El promedio de habitantes de los "+cantPaises+" paises ingresados, es de "+promedioHab+" millones"+"<br>");
    document.write(paisTempMenor+" con "+tempMin+"° es el pais con la temperatura mas baja"+"<br>");



}*/