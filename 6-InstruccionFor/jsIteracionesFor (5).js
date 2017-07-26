function Mostrar()
{
    var contador;
    var numero;

    for(contador=0;;contador++){
        num=parseInt(prompt("INGRESE NUMERO"));

        if(num==9){
            break;
        }

        while(isNaN(num)){
            num=parseInt(prompt("INTENTE OTRA VEZ SOLO NUMEROS"));
        }

    }




}//FIN DE LA FUNCIÓN