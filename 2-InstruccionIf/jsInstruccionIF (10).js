function Mostrar()
{
	var numeroRandom;
	var nota;

	numeroRandom = Math.floor(Math.random() * 10) + 1;
	//Genero el número RANDOM entre 1 y 10 


	if (numeroRandom > 8)
	{
		nota = "Excelente " + numeroRandom;
	}
	else
	{ 
		if (numeroRandom > 3)
		{
			nota = "Aprobó " + numeroRandom;
		}
		else
		{
			nota = "Vamos, la próxima se puede " + numeroRandom;
		}
	}
	document.getElementById('numero').value = nota;

/*
	if (numeroRandom > 8)
	{
		nota = "Excelente " + numeroRandom;
	}
	if (numeroRandom < 8 && numeroRandom > 3)
	{
		nota = "Aprobó " + numeroRandom;
	}
	if (numeroRandom <3)
	{
		nota = "Vamos, la próxima se puede " + numeroRandom;
	}

	document.getElementById('numero').value = nota;
*/



}//FIN DE LA FUNCIÓN