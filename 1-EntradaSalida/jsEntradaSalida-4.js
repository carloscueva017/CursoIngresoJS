/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("INGRESE NOMBRE","");
	document.getElementById("elNombre").value=nombre;

}

