/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
    
    
    var num1;
    var num2;
    var suma;
    var Resta;
    var multiplic;
    var divid;
    

function sumar()
{
    num1=parseInt(document.getElementById('numeroUno').value);
    num2=parseInt(document.getElementById('numeroDos').value);
    suma=parseInt(num1+num2);
    alert('La suma es: ' + suma);	
	
}

function restar()
{
    num1=parseInt(document.getElementById('numeroUno').value);
    num2=parseInt(document.getElementById('numeroDos').value);
    Resta=parseInt(num1-num2);
    alert('La Resta es: ' + Resta);	
	
}

function multiplicar()
{
    num1=parseInt(document.getElementById('numeroUno').value);
    num2=parseInt(document.getElementById('numeroDos').value);
    multiplicar=parseInt(num1*num2);
    alert('La Multiplicacion es: ' + multiplicar);	 
	
}

function dividir()
{
    num1=parseInt(document.getElementById('numeroUno').value);
    num2=parseInt(document.getElementById('numeroDos').value);
    divid =num1/num2;
    alert('La Division es: ' + divid);	
	
}

