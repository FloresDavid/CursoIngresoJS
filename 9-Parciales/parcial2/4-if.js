//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = prompt("Ingrese un numero.");
	segundoNumero = prompt("Ingrese otro numero.");

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	if (primerNumero == segundoNumero)
	{
		resultado = primerNumero * segundoNumero;
	}
	else
	{
		if (primerNumero > segundoNumero)
		{
			resultado = primerNumero - segundoNumero;
		}
		else
		{
			resultado = primerNumero + segundoNumero;
		}
	}
	document.write("El resultado es: " + resultado);
}

