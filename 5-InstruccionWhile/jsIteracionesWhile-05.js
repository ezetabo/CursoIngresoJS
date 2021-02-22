/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
	sexo=prompt("Ingrese su Sexo: ","'f' para femenino, 'm' para masculino.");  

	while (sexo!='f' && sexo!='m') 
	{
		sexo=prompt("Sexo incorrecto, Por favor ingrese su sexo: ","'f' para femenino, 'm' para masculino.");
	}

	if (sexo=='f') {

		txtIdSexo.value="Femenino";
		
	} else {
		
		txtIdSexo.value="Masculino";
		
	}	


}