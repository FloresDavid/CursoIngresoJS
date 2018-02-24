function Mostrar()
{
	var numeroIngresado;
	var contador = 0;

	numeroIngresado = parseInt(prompt("Ingrese un numero."));

	for (i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado%i == 0)
		{
			contador += 1;
		}
	}
	if (contador == 2)
	{
		console.log("El numero es primo.");
	}
	else
	{
		console.log ("El numero no es primo");
	}
}