/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno;
var precioDos;
var precioTres;
var suma;
var promedio;
var subTotal;
var iva;
var precioFinal;

function Sumar () 
{
    precioUno=parseInt(document.getElementById('PrecioUno').value);
    precioDos=parseInt(document.getElementById('PrecioDos').value);
    precioTres=parseInt(document.getElementById('PrecioTres').value);

    suma=precioUno+precioDos+precioTres;

    alert('LA SUMA ES: '+suma);

	
}
function Promedio () 
{
    precioUno=parseInt(document.getElementById('PrecioUno').value);
    precioDos=parseInt(document.getElementById('PrecioDos').value);
    precioTres=parseInt(document.getElementById('PrecioTres').value);

    promedio=(precioUno+precioDos+precioTres)/3;

    alert('EL PROMEDIO ES: '+promedio);
	
}
function PrecioFinal () 
{
    precioUno=parseInt(document.getElementById('PrecioUno').value);
    precioDos=parseInt(document.getElementById('PrecioDos').value);
    precioTres=parseInt(document.getElementById('PrecioTres').value);

    subTotal=precioUno+precioDos+precioTres;
    iva=subTotal*0.21;

    precioFinal=subTotal+iva;

    alert('EL PRECIO FINAL INCLUIDO EL IVA ES: '+precioFinal);


	
}