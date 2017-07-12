function Mostrar()
{
	// declarar variables
	var contador=0;
	var num;
	var numMaximo;
	var numMinimo;
	var bandera=true;
	/*respuesta='si'*/

	/*while(respuesta!='no'){*/
	while(confirm('Desea Continuar',true)){
		contador++;
		num=parseInt(prompt('INGRESAR NUMERO......'));

		while(isNaN(num)){
			num=parseInt(prompt('INGRESE NUMERO NUEVAMENTE.......'));
		}

		if(bandera){
			numMaximo=num;
			numMinimo=num;
			bandera=false;
		}else if(num>numMaximo){
			numMaximo=num;
		}else if(num<numMinimo){
			numMinimo=num;
		}

		document.getElementById('maximo').value=numMaximo;
		document.getElementById('minimo').value=numMinimo;
	
	}




}//FIN DE LA FUNCIÓN