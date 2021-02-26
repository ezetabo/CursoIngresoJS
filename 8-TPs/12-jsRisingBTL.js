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
	let mensajeMatrimonial;
	let mensajeCivil;
	let sueldoBruto;
	let legajo;
	let nacionalidad;
	
	edad=parseInt(prompt("Ingrese la edad"));
		while (isNaN(edad) || edad>90 || edad<18) {
			edad=prompt("edad invalida!!!, reingrese la edad");
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
		while (isNaN(estadoMatrimonial) || estadoMatrimonial>4 || estadoMatrimonial<1) {					
			estadoMatrimonial=prompt("Estado civil Invalido!!!","1.Soltero 2.Casado 3.Divorciado 4.Viudo");
		}	
		switch (estadoMatrimonial) {
			case 1:
				mensajeMatrimonial="Soltero";
				break;
			case 2:
				mensajeMatrimonial="Casado";
				break;
			case 3:
				mensajeMatrimonial="Divorciado";
				break;
			case 4:
				mensajeMatrimonial="Viudo";
				break;	
			}	
		
			txtIdEstadoCivil.value=mensajeMatrimonial;
	
	sueldoBruto=parseInt(prompt("Ingrese el sueldo"));
		while (isNaN(sueldoBruto) || sueldoBruto<8000) {
			sueldoBruto=prompt("Sueldo Incorrecto!!!!","Reingrese el sueldo");			
		}
		txtIdSueldo.value="$"+sueldoBruto;

	legajo=parseInt(prompt("Ingrese legajo"));
			while (isNaN(legajo) || legajo>9999 || legajo<0) {
			legajo=prompt("legajo Incorrecto!!!","Reingrese el legajo");					
		}
		txtIdLegajo.value="N° "+legajo;

		nacionalidad=prompt("Ingrese la nacionalidad","a.Argentino e.Extranjero n.Nacionalizado");		
		while (nacionalidad) {
			if (nacionalidad=='a') {
				mensajeCivil="Argentino";
				break;
			}
			if (nacionalidad=='e') {
				mensajeCivil="Extranjero";
				break;
			}
			
			if (nacionalidad=='n') {
				mensajeCivil="Nacionalizado";
				break;
			}				
			
			nacionalidad=prompt("Nacionalidad Incorrecta, Reingrese la Nacionalidad","a.Argentino e.Extranjero n.Nacionalizado");
		}
		txtIdNacionalidad.value=mensajeCivil;

}
