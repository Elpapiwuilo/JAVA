var discount = prompt ("ingrese los kilos que va a comprar");
var kilo=4200;
if(discount<=2){
    var multiplication=kilo*discount;
    document.write("<h1> La compra de "+discount+" kilos tiene un valor de "+multiplication+"<br>"+" pero tiene un descuento por valor de 0"+"<br>"+"por lo tanto el valor a pagar es: "+multiplication+"</h1>");
}
    if(discount>2 && discount<5){
        var multiplication=kilo*discount;
        var interest=multiplication*0.10;
        var total=multiplication-interest;
        document.write("<h1> La compra de "+discount+" kilos tiene un valor de "+multiplication+"<br>"+" pero tiene un descuento por valor de "+interest+"<br>"+" por lo tanto el valor a pagar es: "+total+"</h1>");
    }
    if(discount>5 || discount<10){
        var multiplication=kilo*discount;
        var interest=multiplication*0.15;
        var total=multiplication-interest;
        document.write("<h1> La compra de "+discount+" kilos tiene un valor de "+multiplication+"<br>"+" pero tiene un descuento por valor de "+interest+"<br>"+" por lo tanto el valor a pagar es: "+total+"</h1>");
    }
    else if(discount>10){
        var multiplication=kilo*discount;
        var interest=multiplication*0.20;
        var total=multiplication-interest;
        document.write("<h1> La compra de "+discount+" kilos tiene un valor de "+multiplication+"<br>"+" pero tiene un descuento por valor de "+interest+"<br>"+" por lo tanto el valor a pagar es: "+total+"</h1>");
    }