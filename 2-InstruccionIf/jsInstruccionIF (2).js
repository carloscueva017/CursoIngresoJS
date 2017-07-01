function Mostrar()
{
//tomo la edad  
var edad;
var condicion;

edad=parseInt(document.getElementById('edad').value);


if(edad>=18){
    condicion="ES MAYOR DE EDAD";
}

alert(condicion);



}//FIN DE LA FUNCIÓN