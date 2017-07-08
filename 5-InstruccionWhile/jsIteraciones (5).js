function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

    while(sexo =='F' || sexo == 'M'){
        sexo = prompt("SEXO INCORRECTO.");
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN