function mostrar()
{
	let numeroIngresado;

	numeroingresado=parseInt(prompt("Ingrese un numero"))
	
	for(let i=1;i<=numeroIngresado;i++){
		if (numeroIngresado%i==0) {
			
			console.log(i)
		}
		
	}
	
	//alert("hay "+pares+" numero pares");	

}