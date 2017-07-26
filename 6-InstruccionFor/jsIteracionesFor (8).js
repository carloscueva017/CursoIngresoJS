function Mostrar()
{
    var num=parseInt(prompt('ingrese numero'));
    var cont=0;

    for(contador=1;contador<=num;contador++){
        
       if(num%contador==0){
           cont++;
           
           if(cont>2){
               break;
           }
       }
      
    }

    if(cont==2){
        alert('SI es Nº Primo');
    }else{
        alert("NO es Nº Primo");
    }




}//FIN DE LA FUNCIÓN