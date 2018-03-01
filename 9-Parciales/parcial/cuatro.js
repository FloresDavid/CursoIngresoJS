function Mostrar()
{

	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = prompt("Ingrese un numero.");
	segundoNumero = prompt("Ingrese otro numero.");

	if (primerNumero == segundoNumero)
	{
		resultado = primerNumero + segundoNumero;
	}
	else
	{

		primerNumero = parseInt(primerNumero);
		segundoNumero = parseInt(segundoNumero);

		if (primerNumero > segundoNumero)
		{
			resultado = primerNumero * segundoNumero;

			if (resultado %2 == 0 && resultado != 0)
			{
				resultado = primerNumero * segundoNumero + " es par";
			}
		}
		else
		{
			resultado = primerNumero - segundoNumero;
		}
		
	}

	document.write("El resultado es: " + resultado);
}



// ingresamos 2 numeros, si son iguales, se concatenan, si el primero es mayor que el segundo se multiplican, si el primero es menor que el segundo, los restamos.