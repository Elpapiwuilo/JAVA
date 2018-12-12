var calificacion,accumulator,accumulatorOne,accumulatorTwo,accumulatorThree;
accumulator=0;
accumulatorOne=0;
accumulatorTwo=0;
accumulatorThree=0;
contador=0;
while(contador<=10){
     calificacion=prompt("digite su calificación"+ contador);
	 contador=contador+1;

	if(calificacion>0 && calificacion<=100){
		if (calificacion<50) {
			accumulator=accumulator+1;

		   }if(calificacion>=50 && calificacion<70){
			   accumulatorOne=accumulatorOne+1;
		   
		   }if(calificacion>=70 && calificacion<80){
			   accumulatorTwo=accumulatorTwo+1;
		   }if(calificacion>80){
			   accumulatorThree=accumulatorThree+1;
		   
		   }else{
			   alert("su calificacion es invalida vuelva a digitarla");
		   
		   }

	}


}
document.write("la cantidad de estudiantes que obtuvieron una calificaión menor a 50 son  "+ accumulator +"<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión de 50 o mas pero menor a 70 son  "+ accumulatorOne + "<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión de 70 o mas pero menor a 80 son  "+ accumulatorTwo + "<br>");
document.write("la cantidad de estudiantes que obtuvieron una calificaión DE 8O o mas son   "+ accumulatorThree +"<br>");


	
