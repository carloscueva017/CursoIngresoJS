function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	var condicion;

	num=Math.floor(Math.random()*10)+1;

	if(num>=9 && num<=10){
		condicion="EXCELENTE";
	}else if(num>=4 && num<=8){
		condicion="APROBÓ";
	}else{
		condicion="VAMOS, LA PROXIMA SE PUEDE";
	}

	alert("SU NOTA ES: "+num+"\n"+"CONDICION: "+condicion);






}//FIN DE LA FUNCIÓN