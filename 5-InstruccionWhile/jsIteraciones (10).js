function Mostrar()
{

	var numero;
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDeNumerosPares=0;
	var acumuladorDeNegativos=0;
	var acumuladorDePositivos=0;

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

		respuesta = prompt ("Ingrese no para detener la carga de numeros.");
	}

	document.getElementById('sumaNegativos').value = acumuladorDeNegativos;
	document.getElementById('sumaPositivos').value = acumuladorDePositivos;
	document.getElementById('cantidadPositivos').value = contadorDePositivos;
	document.getElementById('cantidadNegativos').value = contadorDeNegativos;
	document.getElementById('cantidadCeros').value = contadorDeCeros;
	document.getElementById('cantidadPares').value = contadorDeNumerosPares;
	document.getElementById('promedioPositivos').value = acumuladorDePositivos/contadorDePositivos;
	document.getElementById('promedioNegativos').value = acumuladorDeNegativos/contadorDeNegativos;
	document.getElementById('diferencia').value = acumuladorDePositivos + acumuladorDeNegativos;

}//FIN DE LA FUNCIÓN