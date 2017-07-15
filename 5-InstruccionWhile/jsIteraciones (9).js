function Mostrar()
{
	// declarar variables
	var contador=0;
	var num;
	var Maximo;
	var Minimo;
	var bandera=true;
	/*respuesta=true*/

	/*while(respuesta==true){*/
	while(confirm('Desea Continuar',true)){
		contador++;
		num=parseInt(prompt('INGRESAR NUMERO......'));

		while(isNaN(num)){
			num=parseInt(prompt('INGRESE NUMERO NUEVAMENTE.......'));
		}

			if(bandera){
				Maximo=num;
				Minimo=num;
				bandera=false;
			}else if(num>Maximo){
				Maximo=num;
			}else if(num<Minimo){
				Minimo=num;
			}
		/*respuesta=confirm('Desea Continuar');*/

		document.getElementById('maximo').value=Maximo;
		document.getElementById('minimo').value=Minimo;
	
	}




}//FIN DE LA FUNCIÓN