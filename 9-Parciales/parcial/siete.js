function Mostrar()
{
    var contador=1;
    var Nota;
    var Sexo;
    var contadorSexo=0;
    var acumuladorNota=0;
    var notaMinima=11; //no usar bandera cuando tengo rango 0 - 10
    var contadorM=0;


    while(contador<=2){
        contador++;

        Nota=parseInt(prompt('Nota Nº'+contador));
         while(Nota<0 || Nota>10){
            Nota=parseInt(prompt('Ingrese Nota Nuevamente'));
        }
        
        Sexo=prompt('Ingrese Sexo F - M');
         while(Sexo !='F' && Sexo !='M'){
            Sexo=prompt('Ingrese DE NUEVO Sexo F - M');
        }     
        
        
        acumuladorNota+=Nota;
        promedio=acumuladorNota/2;

        if(nota<notaMinima){
            notaMinima=nota;
        }
        
        if(nota>=6 && Sexo=='M'){
            contadorM++;
        }

    }

    alert('PROMEDIO DE LAS NOTAS: '+promedio+'\n'+
          'LA MINIMA NOTA: '+notaMinima+'\n'+
           'Varones de Nota Mayor o igual a 6: '+contadorM);

}
