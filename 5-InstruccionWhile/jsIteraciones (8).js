function Mostrar()
{

	var contador=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=1;
	var respuesta='si';

while(confirm('Desea Continuar.....',true)){
	contador++;
	num=parseInt(prompt('Ingrese Numero....'));

	while(isNaN(num)){
			num=prompt('Nuevamente..........');
			num=parseInt(num);
		}
	
	if(num>=0){
		acumuladorPositivo+=num;
	}else{
		acumuladorNegativo*=num;
	}

	


}


document.getElementById('suma').value=acumuladorPositivo;
document.getElementById('producto').value=acumuladorNegativo;

}//FIN DE LA FUNCIÓN