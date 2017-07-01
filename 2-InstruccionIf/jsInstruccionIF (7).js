function Mostrar()
{
//tomo la edad  
var edad;
var estado;
var condicion;

edad=parseInt(document.getElementById('edad').value);
estado=document.getElementById('estadoCivil').value;


if(edad<18 && estado=="Casado"){
    condicion="Es muy pequeño para No ser Soltero";
}else if(edad<18 && estado=="Divorciado"){
    condicion="Es muy pequeño para No ser Soltero";
}else{
    condicion="MUY BIEN";
}

alert(condicion);
	


}//FIN DE LA FUNCIÓN