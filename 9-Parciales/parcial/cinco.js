function Mostrar()
{
    var dia;

    dia=prompt('DIA');

    switch(dia){
        case 'SABADO':
        case 'DOMINGO':
        alert('ES FIN DE SEMANA');
        break;
        default:
        alert('A TRABAJAR!!!');
    }

}
