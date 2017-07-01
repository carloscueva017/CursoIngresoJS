function Mostrar()
{
//tomo la edad  
    var edad;
    var condicion;

    edad=parseInt(document.getElementById('edad').value);

    if(edad>=13 && edad<=17){
        condicion="ES ADOLECENTE";
    }else{
        condicion="NO es ADOLECENTE";
    }
    alert(condicion);



}//FIN DE LA FUNCIÓN