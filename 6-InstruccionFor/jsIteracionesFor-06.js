function mostrar()
{
	let numeroIngresado;
	let pares=0;

	numero=parseInt(prompt("Ingrese un numero"))
	
	for(let i=2;i<=numeroIngresado;i=i+2){
		pares=pares+1;
		console.log(i)
	}
	
	alert("hay "+pares+" numero pares");

}