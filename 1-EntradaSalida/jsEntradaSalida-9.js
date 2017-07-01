/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var importe;
    var aumento;
    var resultado;
    var resultadoFinal;

    importe=parseInt(document.getElementById('sueldo').value);
    aumento=0.10;
     
    resultadoFinal=importe+resultado;

    parseInt(document.getElementById('resultado').value=resultadoFinal);

	
}
