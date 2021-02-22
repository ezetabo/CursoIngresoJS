/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide
 realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
 (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoMatrimonial;
	let mensaje;
	let sueldoBruto;
	let legajo;
	let nacionalidad;
	
	edad=parseInt(prompt("Ingrese la edad"));
		while (edad>90 || edad<18) {
			edad=parseInt(prompt("edad invalida!!!, reingrese la edad"));
		}
			txtIdEdad.value=edad+" años";

	sexo=prompt("Ingrese el sexo:","'m' para masculino y 'f'para femenino");
		while (sexo!='f' && sexo!='m') {
			sexo=prompt("Sexo invalido!!!, reingrese el sexo:","'m' para masculino y 'f'para femenino");		
		}
		if (sexo=='f') {
			txtIdSexo.value="Femenino";
		} else {
			txtIdSexo.value="Masculino";	
			}

	estadoMatrimonial=parseInt(prompt("Ingrese estado civil","1.Soltero 2.Casado 3.Divorciado 4.Viudo"));
		while (estadoMatrimonial>4 || estadoMatrimonial<1) {					
			estadoMatrimonial=parseInt(prompt("Estado civil Invalido!!!","1.Soltero 2.Casado 3.Divorciado 4.Viudo"));
		}	
		switch (estadoMatrimonial) {
			case 1:
				mensaje="Soltero";
				break;
			case 2:
				mensaje="Casado";
				break;
			case 3:
				mensaje="Divorciado";
				break;
			case 4:
				mensaje="Viudo";
				break;	
			}	
		
			txtIdEstadoCivil.value=mensaje;
	
	sueldoBruto=parseInt(prompt("Ingrese el sueldo"));
		while (sueldoBruto<8000) {
			sueldoBruto=parseInt(prompt("Sueldo Incorrecto!!!!","Reingrese el sueldo"));			
		}
		txtIdSueldo.value="$"+sueldoBruto;

	legajo=parseInt(prompt("Ingrese legajo"));
		while (legajo>9999 || legajo<0) {
			legajo=parseInt(prompt("legajo Incorrecto!!!","Reingrese el legajo"));					
		}
		txtIdLegajo.value="N° "+legajo;

		nacionalidad=prompt("Ingrese la nacionalidad","a.Argentino e.Extranjero n.Nacionalizado");		
		while (nacionalidad) {
			if (nacionalidad=='a') {
				mensaje="Argentino";
				break;
			}
			if (nacionalidad=='e') {
				mensaje="Extranjero";
				break;
			}
			
			if (nacionalidad=='n') {
				mensaje="Nacionalizado";
				break;
			}				
			
			nacionalidad=prompt("Nacionalidad Incorrecta, Reingrese la Nacionalidad","a.Argentino e.Extranjero n.Nacionalizado");
		}
		txtIdNacionalidad.value=mensaje;

}
