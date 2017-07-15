function Mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var sumaNegativo=0;
	var sumaPositivo=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var cantidadPosyNeg=0;
	
	var respuesta=true;
	

	/*while(confirm('Continuar....',true)){
		contador++;
		num=parseInt(prompt('INGRESE NUMERO....'));
		
		while(isNaN(num)){
			num=parseInt(prompt('VUELVA A INGRESAR NUMERO...'));
		}

			if(num<0){
				sumaNegativo+=num; // O sumaNegativo=sumaNegativo+num;
				cantidadNegativos++; //CONTADOR NEGATIVOS
			}else if(num>0){
				sumaPositivo+=num; // O sumaPositivo=sumaPositivo+num;
				cantidadPositivos++; //CONTADOR DE POSITVOS
			}else{
				cantidadCeros++; //CONTADOR DE CEROS
			}

				if(num%2==0){
					cantidadPares++;
				}

	}

	promedioPositivos=sumaPositivo/cantidadPositivos;
	promedioNegativos=sumaNegativo/cantidadNegativos;
	cantidadPosyNeg=cantidadPositivos-cantidadNegativos;

	document.write('Suma Positiva: '+sumaPositivo+'<br>'+
				   'Suma Negativo: '+sumaNegativo+'<br>'+
				   'Contador Positivos: '+cantidadPositivos+'<br>'+
				   'Contador Negativos: '+cantidadNegativos+'<br>'+
				   'Contador Pares: '+cantidadPares+'<br>'+
				   'Contador Ceros: '+cantidadCeros+'<br>'+
				   'promedio Positivos: '+promedioPositivos+'<br>'+
				   'Promedio Negativos: '+promedioNegativos+'<br>'+
				   'Diferencia entre Positivos y Negativos: '+promedioNegativos+'<br>'
				);*/

	while(respuesta==true){
		contador++;
		num=parseInt(prompt('INGRESE NÚMERO....'));
		
		while(isNaN(num)){
			num=parseInt(prompt('VUELVA A INGRESAR NUMERO...'));
		}

			if(num<0){
				sumaNegativo+=num; // O sumaNegativo=sumaNegativo+num; (SUMA DE LOS NEGATIVOS)
				cantidadNegativos++; //CONTADOR NEGATIVOS
			}else if(num>0){
				sumaPositivo+=num; // O sumaPositivo=sumaPositivo+num; (SUMA DE LOS POSITIVOS)
				cantidadPositivos++; //CONTADOR DE POSITVOS
			}else{
				cantidadCeros++; //CONTADOR DE CEROS
			}

				if(num%2==0){
					cantidadPares++;
				}
				respuesta=confirm('DESEA CONTINUAR');
				
	}
			

		promedioPositivos=sumaPositivo/cantidadPositivos;
		promedioNegativos=sumaNegativo/cantidadNegativos;
		cantidadPosyNeg=cantidadPositivos-cantidadNegativos;


			/**PARA QUE NO ME MUESTRE NUMEROS NEGATIVOS (LOS CONVIERTE A POSITIVOS) */
			if(cantidadPosyNeg<0){
				cantidadPosyNeg*=-1;
			}



			if(isNaN(promedioPositivos)){
				promedioPositivos='No Ingreso Numero Positivos';
				}

				if(isNaN(cantidadNegativos)){
				promedioNegativos='No Ingreso Numero Negativos';
				}
			
		
		

		document.write('<center>'+
				'Suma Positiva: '+sumaPositivo+'<br>'+
				'Suma Negativo: '+sumaNegativo+'<br>'+
				'Contador Positivos: '+cantidadPositivos+'<br>'+
				'Contador Negativos: '+cantidadNegativos+'<br>'+
				'Contador Pares: '+cantidadPares+'<br>'+
				'Contador Ceros: '+cantidadCeros+'<br>'+
				'promedio Positivos: '+promedioPositivos+'<br>'+
				'Promedio Negativos: '+promedioNegativos+'<br>'+
				'Diferencia entre Positivos y Negativos: '+cantidadPosyNeg+'<br></center>'
		);




}//FIN DE LA FUNCIÓN