function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case 'Julio':
    case 'Agosto':
        alert ('Invierno');
        break;

    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
    case 'Diciembre':
        alert ('Ya Paso el Invierno');
        break;

    default:
        alert('Falta para el Invierno');
        break;

}








}//FIN DE LA FUNCIÓN