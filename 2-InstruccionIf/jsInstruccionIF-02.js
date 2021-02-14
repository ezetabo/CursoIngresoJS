/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
 */
//Ezequiel Taboada 1°D
function mostrar()
{
	let peso;
	let estatura;
	let imc;
	
	peso = txtIdEdad.value;
	peso = parseInt(peso);
	estatura = prompt("ingrese su estatura","ej: 1.78");	
	imc = peso / (estatura*2);
	imc=imc.toFixed(2);

	if(imc<18.5)
	{
		mensaje="Bajo peso";
	}
	else
	{
		if(imc>18.4 && imc<25)
		{
			mensaje="Peso normal";
		}
		else
		{
			if(imc>=25 && imc<30)
			{
				mensaje="Preobesidad";
			}
			else
			{
				if(imc>=30 && imc<35)
				{
					mensaje="Obesidad I";
				}
				else
				{
					if(imc>=35 && imc<40)
					{
						mensaje="Obesidad II";
					}
					else
					{
						mensaje="Obesidad III";
					}
				}
			}
		}
	}
	
	 alert("Su IMC es de: "+imc+", Usted tiene "+mensaje);
}
	