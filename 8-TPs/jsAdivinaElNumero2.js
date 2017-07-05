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

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100)+1;
	console.log(numeroSecreto);
	contadorIntentos=contadorIntentos+1;

	contador=document.getElementById("intentos").value=contadorIntentos;	 
	

}

function verificar()
{
	if(contador==1){
		alert("Usted es un Psíquico");
	}else if(contador==2){
		alert("Excelente Percepción");
	}else if(contador=3){
		alert("Esto es Suerte");
	}else if(contador==4){
		alert("Excelente Tecnica");
	}else if(contador==5){
		alert("Usted esta en la Media");
	}else if(contador>=6 && contador<=10){
		alert("Falta Tecnica");
	}else{
		alert("Afortunado en el Amor");
	}
	
	

}