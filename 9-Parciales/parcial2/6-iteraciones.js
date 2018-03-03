//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeMaximo;
	var importeMinimo;

	for (i = 1; i <= 7; i++)
	{
		importe = prompt("Ingrese el importe del dia");
		importe = parseInt(importe)

		while (importe < 1 || isNaN(importe))
		{
			importe = prompt("Error, ingrese el importe del dia");
			importe = parseInt(importe)
		}
		if (i == 1)
		{
			importeMinimo = importe;
			importeMaximo = importe;
		}
		else
		{
			if (importe > importeMaximo)
			{
				importeMaximo = importe;
			}
			if (importe < importeMinimo)
			{
				importeMinimo = importe;
			}
		}
	}

	alert ("El importe maximo es: " + importeMaximo);
	alert ("El importe minimo es: " + importeMinimo);	
}