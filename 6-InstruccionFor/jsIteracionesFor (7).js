function Mostrar()
{
	var numeroIngresado;
	var contador = 0;

	numeroIngresado = parseInt(prompt("Ingrese un numero."));

	for (i = 1; i <= numeroIngresado; i++)
	{
		if (numeroIngresado%i == 0)
		{
			console.log(i);
			contador += 1;
		}
	}
	console.log("Hay " + contador + " numeros divisores.");
}