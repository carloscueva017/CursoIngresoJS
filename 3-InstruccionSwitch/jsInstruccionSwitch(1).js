function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case 'Enero':
        alert("Que Comienze Bien el Año");
        break;
    
    case 'Marzo':
        alert("A Clases");
        break;

    case 'Julio':
        alert("se vienen las vacaciones!!!");
        break;

    case 'Diciembre':
        alert("Felices fiesta!!!");
        break;

    default:
    break;


}


}//FIN DE LA FUNCIÓN