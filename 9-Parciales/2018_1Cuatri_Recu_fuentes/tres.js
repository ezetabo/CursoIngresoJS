/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/
function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio=parseInt(prompt("Ingrese el precio"));
    descuento=parseInt(prompt("ingrese el descuento"));

    precioFinal=precio-precio*descuento/100;

    elPrecioFinal.value="$"+precioFinal;

}
