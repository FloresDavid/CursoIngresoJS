function Mostrar()
{
	var numeroIngresado;
	var contadorDePares = 0;

	numeroIngresado = parseInt(prompt("Ingrese un numero."));

	for (i = 1; i < numeroIngresado; i++)
	{
		if (i%2 == 0)
		{
			console.log(i);
			contadorDePares += 1;
		}
	}
	console.log("Hay " + contadorDePares + " numeros pares.");
}