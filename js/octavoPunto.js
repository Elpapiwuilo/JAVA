var weather=prompt("Ingrese el tiempo de consumo de llamada");
if(weather<=3){
    document.write("El costo de la llamada es :"+"<br>");
    document.write(weather*200);
    
}
else if(weather>3){
    document.write("El costo de la llamada es :" + "<br>");
    document.write(weather*30+510);

}