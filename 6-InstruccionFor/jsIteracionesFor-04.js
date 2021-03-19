function mostrar()
{
	/*let repeticiones;

	repeticiones=parseInt(prompt("Ingrese un valor"));
	
	for(repeticiones!=09){
		
		repeticiones=parseInt(prompt("Ingrese un valor"));
	}*/
	
	let i;
	let repuesta;


	for (i=0 ; i<100 ; i++) {
		alert("hola");

		repuesta=confirm("desea continuar");

		if (repuesta==false) {
			break;
		}
		alert("sigo");
		
	}

}