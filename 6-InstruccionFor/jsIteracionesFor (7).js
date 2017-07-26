function Mostrar()
{
    var num;
    var contadorDivisores;

    num=parseInt(prompt('INGRESE NUMERO'));

    for(contador=1;contador<=num;contador++){

        if(num%contador==0){
            contadorDivisores++;
            console.log('Numeros Divisores de '+num);
            console.log(contador);

        }

    }




}//FIN DE LA FUNCIÓN