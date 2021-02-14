
/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y 
el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
*/
//Ezequiel Taboada 1°D
function mostrar()
{
	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia = txtIdEdad.value;
	tiempo = prompt("ingrese el tiempo que tardo");
	distancia = parseInt(distancia);
	velocidad = distancia/tiempo;
	velocidad=parseInt(velocidad)

	if(velocidad<=60)
	{
		mensaje="su ritmo es muy lento";
	}
	else
	{
		if(velocidad>60 && velocidad<=80)
		{
			mensaje="su ritmo es lento";
		}

		else
		{
			if(velocidad>80 && velocidad<=100)
			{
				mensaje="tiene buen ritmo";
			}
			else
			{
				if(velocidad>100 && velocidad==120)
				{
					mensaje="esta cerca de inflijir la ley";
				}
				else
				{
					mensaje="eso no se hace";
				}
			}
		}
	}
	alert("su velocidad es de: "+velocidad+"km/h"+" y "+ mensaje);	

}