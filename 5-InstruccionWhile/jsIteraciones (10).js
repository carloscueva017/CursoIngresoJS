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
	
	/*var respuesta=true;*/
	/*while(respuesta==true)*/

	while(confirm('Continuar....',true)){
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
				);





}//FIN DE LA FUNCIÓN