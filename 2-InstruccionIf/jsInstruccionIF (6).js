function Mostrar()
{
//tomo la edad  
var edad;
var condicion;

edad=parseInt(document.getElementById('edad').value);

if(edad >=18){
    condicion="ES MAYOR DE EDAD";
}else if(edad >=13 && edad <=17){
    condicion="ES ADOLECENTE";
}else if (edad <13){
    condicion="ES NIÑO";
}

alert(condicion);



}//FIN DE LA FUNCIÓN