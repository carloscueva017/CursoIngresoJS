/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    var resto;

    dividendo=parseInt(document.getElementById('numeroDividendo').value);
    divisor=parseInt(document.getElementById('numeroDivisor').value);

    resto=parseInt(dividendo%divisor);


    alert("El Resto es: "+resto);
	
}
