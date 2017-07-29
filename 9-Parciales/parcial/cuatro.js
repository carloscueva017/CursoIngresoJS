function Mostrar()
{
    var num1;
    var num2;
    var resultado;

    num1=parseInt(prompt('Ingrese Numero 1:'));
    num2=parseInt(prompt('Ingrese Numero 2:'));

    if(num1==num2){
        resultado=num1*num2;   
    }
    else if(num1>num2){
        resultado=num1-num2;
    }
    else{
        resultado=num1+num2;
    }

    document.write(resultado);


}
