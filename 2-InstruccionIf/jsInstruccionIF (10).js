function Mostrar()
{
	var random;
	var nota;

	random = Math.floor(Math.random() * 10) + 1;
	//Genero el número RANDOM entre 1 y 10 


	if (random > 8)
	{
		nota = "Excelente " + random;
	}
	else
	{ 
		if (random > 3)
		{
			nota = "Aprobó " + random;
		}
		else
		{
			nota = "Vamos, la próxima se puede " + random;
		}
	}
	document.getElementById('numero').value = nota;

}//FIN DE LA FUNCIÓN