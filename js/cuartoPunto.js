var num=prompt("Ingresa un numero");
var total=0;
num.split('').forEach(num=>total+=parseInt(num));
document.write("Suma de los numeros ingresados"+ "<br>" +total);