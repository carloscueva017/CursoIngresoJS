function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	switch(laHora){
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
            alert('ES DE MAÑANA')
            break;

        default:
            alert('No es de Mañana');
            break;
    }
	



}//FIN DE LA FUNCIÓN