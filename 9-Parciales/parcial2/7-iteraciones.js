//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var cantidadNotas = 6;
	var SumaNotas = 0;
	var promedio = 0;
	var varonesConNotaMayorOIgualASeis = 0;
	var notaMasBaja;

	for (i = 1; i <= 6; i++)
	{
		nota = prompt("Ingrese la nota del alumno.");
		nota = parseInt(nota);

		while (nota < 0 || nota > 10 || isNaN(nota))
		{
			nota = prompt("Error, ingrese la nota del alumno.");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese f o m, segun el sexo del alumno.")
		sexo = sexo.toLowerCase();

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese f o m, segun el sexo del alumno.")
			sexo = sexo.toLowerCase();
		}

		SumaNotas += nota;

		if (i == 1)
		{
			notaMasBaja = nota;
		}
		else 
		{
			if (nota < notaMasBaja)
			{
				notaMasBaja = nota;
			}
		}
		if (sexo == "m" && nota >= 6)
		{
			varonesConNotaMayorOIgualASeis += 1;
		}
	}

	promedio = SumaNotas / cantidadNotas;

	alert ("El promedio de notas totales es: " + promedio);
	alert ("La nota mas baja fue: " + notaMasBaja);
	alert ("La cantidad de varores con notas mayores o iguales a 6 son: " + varonesConNotaMayorOIgualASeis);
}

