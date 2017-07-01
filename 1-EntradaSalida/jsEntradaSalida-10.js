/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var importe;
    var descuento;
    var resultado;
    var resultadoFinal;

    importe=parseInt(document.getElementById('importe').value);
    descuento=0.25;
    resultado=importe*descuento;
    resultadoFinal=importe-resultado;

    parseInt(document.getElementById('resultado').value=resultadoFinal);
	
}
