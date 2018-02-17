function Mostrar()
{

	var clave = prompt("ingrese el número clave.");

	while (clave != "utn750")
	{
		alert("clave incorrecta, ingrese nuevamente.");

		clave = prompt("ingrese el número clave.");
	}

	alert ("Clave correcta.");

}//FIN DE LA FUNCIÓN
