
function mostrar()
{
    let largo;
    let ancho;
    let perimetro;

    largo=parseInt(prompt("Ingrese el largo"));
    ancho=parseInt(prompt("Ingrese el ancho"));

    perimetro=(largo+ancho)*2;

    alert("El perimetro es: "+perimetro);

}
