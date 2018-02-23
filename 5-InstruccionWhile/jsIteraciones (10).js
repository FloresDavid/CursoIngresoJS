function Mostrar()
{

	var numero;
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDeNumerosPares=0;
	var acumuladorDeNegativos=0;
	var acumuladorDePositivos=0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferencia;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero."));

		if (numero > 0)
		{
			acumuladorDePositivos += numero;
			contadorDePositivos += 1;
		}
		else
		{
			if (numero < 0)
			{
				acumuladorDeNegativos += numero;
				contadorDeNegativos += 1;
			}
			else
			{
				contadorDeCeros += 1;
			}
		}
		if (numero % 2 == 0 && numero != 0)
		{
			contadorDeNumerosPares += 1;
		}
		respuesta = prompt ("Ingrese 'si' para seguir cargando numeros, 'no' para detener la carga.");
	}

	promedioDePositivos = acumuladorDePositivos/contadorDePositivos;
	promedioDeNegativos = acumuladorDeNegativos/contadorDeNegativos;
	diferencia = acumuladorDePositivos - acumuladorDeNegativos;

	document.write("La suma de negativos es: " + acumuladorDeNegativos + "<br>");
	document.write("La suma de Positivos es: " + acumuladorDePositivos + "<br>");
	document.write("La cantidad de numeros positivos es: " + contadorDePositivos + "<br>");
	document.write("La cantidad de numeros negativos es: " + contadorDeNegativos + "<br>");
	document.write("La cantidad de ceros es: " + contadorDeCeros + "<br>");
	document.write("La cantidad de numeros pares es: " + contadorDeNumerosPares + "<br>");
	document.write("El promedio de numeros positivos es: " + promedioDePositivos + "<br>");
	document.write("El promedio de numeros negativos es: " + promedioDeNegativos + "<br>");
	document.write("La diferencia es: " + diferencia);

}//FIN DE LA FUNCIÓN