/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var Cantidad;
var precioDescuento;
var subprecio;
var descuento;
var precioFinal=35;
var marca;
var impuesto;
var ingresosBrutos;

function CalcularPrecio () 
{
    Cantidad=parseInt(document.getElementById('Cantidad').value);
    marca=document.getElementById('Marca').value;

    if(Cantidad>=6){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.50;
        precioDescuento=subprecio-descuento;
    
    }else if(Cantidad==5 && marca=='ArgentinaLuz'){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.40;
        precioDescuento=subprecio-descuento;
    }else if(Cantidad==5){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.30;
        precioDescuento=subprecio-descuento;
    
    }else if(Cantidad==4 && marca=='ArgentinaLuz' || marca=='FelipeLamparas'){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.25;
        precioDescuento=subprecio-descuento;
    }else if(Cantidad==4){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.20;
        precioDescuento=subprecio-descuento;
    
    }else if(Cantidad==3 && marca=='ArgentinaLuz'){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.15;
        precioDescuento=subprecio-descuento;
    }else if(Cantidad==3 && marca=='FelipeLamparas'){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.10;
        precioDescuento=subprecio-descuento;
    }else if(Cantidad==3){
        subprecio=precioFinal*Cantidad;
        descuento=subprecio*0.5;
        precioDescuento=subprecio-descuento;
    }

    if(precioDescuento>120){
        impuesto=precioDescuento*0.10;
        ingresosBrutos=precioDescuento+impuesto;
        alert('IIBB Usted pago '+ingresosBrutos+ 'siendo '+impuesto+' el impuesto que se pagó')
    }

    document.getElementById('precioDescuento').value=precioDescuento;

    /*switch(marca){
        case 'ArgertinaLuz':
            if(Cantidad>=6){
                subprecio=precioFinal*Cantidad;
                descuento=subprecio*0.50;
                precioDescuento=subprecio-descuento;
             }else if(cantidad=5){
                subprecio=precioFinal*Cantidad;
                descuento=subprecio*0.40;
                precioDescuento=subprecio-descuento;
            }else if(cantidad=4){
                subprecio=precioFinal*Cantidad;
                descuento=subprecio*0.25;
                precioDescuento=subprecio-descuento;
            }else if(cantidad=3){
                subprecio=precioFinal*Cantidad;
                descuento=subprecio*0.15;
                precioDescuento=subprecio-descuento;
            }
 	
    }*/
}
