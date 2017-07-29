function Mostrar()
{   
    var importeFinal;
    var importeDia;
    var contador=1;
    var importeMayor;
    var importeMenor;
    var bandera=true;
    var acumulador=0;


    while(contador<=24){
        
        importeDia=parseInt(prompt('INGRESAR IMPORTE DEL DIA. '+contador));
        contador++;
        acumulador+=importeDia;

        while(importeDia<1){
            importeDia=parseInt(prompt('TIENE QUE SER MAYOR A 0....'));
        }

        if(isNaN(importeDia)){
            importeDia=parseInt(prompt('NUEVAMENTE....'));
        }


        if(bandera){
            importeMayor=importeDia;
            importeMenor=importeDia;
            bandera=false;
        }else if(importeDia>importeMayor){
            importeMayor=importeDia;
        }else if(importeDia<importeMenor){
            importeMenor=importeDia;
        }


        
    }

    document.getElementById('importeFinal').value=acumulador;


    alert('El Importe Maximo: '+importeMayor+'\n'+
          'El Importe Minimo: '+importeMenor)


}
