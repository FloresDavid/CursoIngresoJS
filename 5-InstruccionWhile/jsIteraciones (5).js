function Mostrar()
{

	var sexo = prompt("ingrese f para 'Femenino' ó m para 'Masculino'.");

	while (sexo != "f" && sexo != "m")
	{
		sexo = prompt("ingrese f para 'Femenino' ó m para 'Masculino'");
	}

	if (sexo == "f")
	{
		sexo = "femenino";
	}
	else
	{
		sexo = "masculino";
	}	

	document.getElementById('Sexo').value = "Su sexo es " + sexo;







	/*if (sexo == "f")
	{
		document.getElementById('Sexo').value = "Femenino";
	}
	else
	{
		document.getElementById('Sexo').value = "Masculino";
	}*/

}//FIN DE LA FUNCIÓN