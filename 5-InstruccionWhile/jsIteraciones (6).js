
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	
	while(contador<5){
		contador++;
		num=parseInt(prompt('Ingrese Numero................'));
		console.log(num);
		
		while(isNaN(num)){
			num=prompt('Nuevamente..........');
			num=parseInt(num);
		}

		acumulador=acumulador+num;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN