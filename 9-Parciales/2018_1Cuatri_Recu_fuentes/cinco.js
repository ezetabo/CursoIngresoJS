/*pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.*/
function mostrar()
{
    let diaSemana;
    let mensaje;

    diaSemana=prompt("Ingrese un dia de la semana");

    switch (diaSemana) {
        case "lunes":         
        case "martes":         
        case "miercoles":            
        case "jueves":      
        case "viernes":
            mensaje="a trabajar";            
            break;

        case "sabado":       
        case "domingo":
            mensaje="buen finde";
            break;
        
        default:
            mensaje="el dato ingresado no es un dia de la semana"
            break;
    }
    alert(mensaje);
    
}
