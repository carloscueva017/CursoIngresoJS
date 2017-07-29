function Mostrar()
{
    var precio;
    var aumento;

    precio=prompt('INGRESE PRECIO:');
    parseInt(precio);

    aumento=precio+(precio*0.21);
    parseInt(aumento);

    document.getElementById('importeFinal').value=aumento;

  
}
