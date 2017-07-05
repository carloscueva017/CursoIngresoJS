function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){
        case 'Febrero':
            alert('si tiene 28 días');
            break;

        case 'Abril':
        case 'Septiembre':
        case 'Noviembre':
            alert ('tienen 30 dias');
            break;

        default:
            alert('tienen 31 dias');
            break;

    }
	



}//FIN DE LA FUNCIÓN