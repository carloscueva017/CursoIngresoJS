/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var ancho, largo, radio, alambre, terreno,materiales;

function Rectangulo () 
{
    ancho=parseInt(document.getElementById('Ancho').value);
    largo=parseInt(document.getElementById('Largo').value);

    terreno=ancho*largo;

    alambre=terreno*3;

    alert('CANTIDAD DE ALAMBRE A COMPRAR: '+alambre+' mts');


}
function Circulo () 
{
    radio=parseInt(document.getElementById('Radio').value);

    terreno=(2*Math.PI)*radio;

    alambre=terreno*3;
	
    alert('CANTIDAD DE ALAMBRE A COMPRAR: '+alambre+' mts');
}
function Materiales () 
{
    ancho=parseInt(document.getElementById('Ancho').value);
    largo=parseInt(document.getElementById('Largo').value);

    terreno=(ancho*largo);

    cemento=terreno*2;
    cal=terreno*3;

    alert('Para:'+terreno+'mts\n'+'Bolsa de Cemento: '+cemento+'\nBolsas de Cal: '+cal)


	
}