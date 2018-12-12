


var cedula=prompt("Cedula");
var nombre=prompt("Nombre del vendedor");
var salario=prompt("Ingrese el valor de su sueldo mensual");
var laborados=prompt("Dias Laborados");
var ventas=prompt("Valor de sus ventas")
var prestamos=prompt("valor del prestamo diligenciado");

if(salario<=1562484){
    var trabajo=(salario*laborados)/30;
    var comision=ventas*0.2;
    var auxilio=(88211*laborados)/30;
    var comision=ventas*0.2;
    var deuda=prestamos;
    var total =(trabajo+comision+auxilio)-prestamos;

}else if(salario>1562484){
    alert("no tiene derecho a este beneficio"); 

}

    var comision=ventas*0.2;
    var trabajo=(salario*laborados)/30;
    var deuda=prestamos;
    var total =(trabajo+comision)-prestamos;

document.write("Cedula Empleado :"+cedula+ "<br>");
document.write("Nombre Empleado "+nombre+ "<br>");
document.write("Salario Básico "+salario+ "<br>");
document.write("Auxilio de Transporte: "+auxilio+ "<br>");
document.write("Comisión de Ventas: "+comision+ "<br>");
document.write("Préstamos "+deuda+ "<br>");
document.write("Salario Neto a Recibir: "+total+ "<br>");











