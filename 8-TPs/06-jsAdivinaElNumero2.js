/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
let numeroSecreto;
  let intentos=0;   

function comenzar()
{ 
  let maximo=100;
	let minimo=1;
	
	numeroSecreto=Math.round(Math.random() * (maximo - minimo) + minimo); 
}

function verificar()
{
	let numeroIngresado;
	let mensaje;
	
	numeroIngresado=parseInt(txtIdNumero.value);
	intentos++;
	intentos=parseInt(intentos);
	txtIdIntentos.value=intentos;
	
  if (numeroIngresado<numeroSecreto) {
    alert("le falta...");
  } else {if (numeroIngresado>numeroSecreto) {
    alert("se paso...");     
  } else {if (numeroSecreto==numeroSecreto) {	  
	  switch (intentos) {
		  case 1:
			  mensaje=" usted es un Psíquico";
			  break;
		  case 2:
			  mensaje=" excelente percepción";
			  break;
		  case 3:
			  mensaje=" Esto es suerte";
			  break;
		  case 4:
			  mensaje=" Excelente técnica";
			  break;
		  case 5:
			  mensaje=" usted está en la media";
			  break;
		  case 6:		
		  case 7:
		  case 8:		
		  case 9:
			  mensaje=" falta técnica";
			  break;	  
		  default:
			  mensaje=" afortunado en el amor!!"
			  break;
  		}
  	alert(intentos+" intentos "+ mensaje);
		}
  }    
  }
}