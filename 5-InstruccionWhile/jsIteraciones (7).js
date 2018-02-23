function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	var promedio;

	while (respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un numero."));
		acumulador += numero;
		contador += 1;
		respuesta = prompt("Ingrese 'si' para seguir ingresando numeros.");
	}

	promedio = acumulador/contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN