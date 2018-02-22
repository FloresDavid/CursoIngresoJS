function Mostrar()
{

	var contador=0;
	var numero;
	var numeroMaximo="";
	var numeroMinimo;
	// declarar variables
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if (numeroMaximo == "")
		{
			numeroMaximo = numero;
			numeroMinimo = numero;
		}
		else 
		{
			if (numeroMaximo < numero)
			{
				numeroMaximo = numero;
			}
			else
			{
				if (numeroMinimo > numero)
				{
					numeroMinimo = numero;
				} 
			}
		}

		respuesta = prompt ("Ingrese no para detener la carga de numeros")
	}

		document.getElementById('maximo').value = numeroMaximo;
		document.getElementById('minimo').value = numeroMinimo;

}//FIN DE LA FUNCIÓN