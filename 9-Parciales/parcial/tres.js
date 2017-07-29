function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    largo=parseInt(document.getElementById('largo').value);
    ancho=parseInt(document.getElementById('ancho').value);

    perimetro=(2*largo)+(2*ancho);

    alambre=perimetro*3;

    alert('Se Necesitan '+alambre+' mts. de Alambre');

}
