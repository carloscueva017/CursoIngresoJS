function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	
while(confirm('DESEA CONTINUAR.....',true)){
	contador++;
	num=parseInt(prompt('Ingrese Numero......'));

	console.log(num);
	
	/*respuesta=confirm('DESEA CONTINUAR.....');*/

	acumulador=acumulador+num;
}


/*while (respuesta===true) {
	contador++;
	num=parseInt(prompt('Ingrese Numero......'));

	console.log(num);

	respuesta=confirm('DESEA CONTINUAR.....');

	if(num=='si')
	break
	acumulador=acumulador+num;
}*/
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN