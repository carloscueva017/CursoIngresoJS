/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/

var numRamdon;
var contadorGano=0;
var contadorEmpate=0;
var contadorPerdio=0;
var resultado;
function comenzar()
{
    numRamdon=Math.floor(Math.random()*(4-1))+1;
    console.log(numRamdon);
	
}//FIN DE LA FUNCIÓN

function piedra()
{
    comenzar();
     switch(numRamdon){
        case 1:
            resultado='EMPATE';
            contadorEmpate++;
            break;
        case 2:
            resultado='PERDIO';
            contadorPerdio++;
            break;
        case 3:
            resultado='GANO';
            contadorGano++;
            break; 
     }
        mostrarResultado();

}//FIN DE LA FUNCIÓN

function papel()
{
    comenzar();
    switch(numRamdon){
        case 1:
            resultado='GANO';
            contadorGano++;
            break;
        case 2:
            resultado='EMPATE';
            contadorEmpate++;
            break;
        case 3:
            resultado='PERDIO';
            contadorPerdio++;
            break; 
     }
     mostrarResultado();
     
}//FIN DE LA FUNCIÓN

function tijera()
{
    comenzar();
    switch(numRamdon){
        case 1:
            resultado='PERDIO';
            contadorPerdio++;
        case 2:
            resultado='GANO';
            contadorGano++;
        case 3:
            resultado='EMPATE';
            contadorEmpate++;
     }
     mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado(){
        /*if(contadorGano>3){
            contadorGano-=1;
            resultado='PERDIO'
        
        }*/

    alert(resultado+'\n'+
            '\nGANO: '  + contadorGano+
            '\nEMPATO: '+ contadorEmpate+
            '\nPERDIO: '+ contadorPerdio);
}