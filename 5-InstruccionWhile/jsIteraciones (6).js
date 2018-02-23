function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while (contador < 5)
	{
		numero = parseInt(prompt("Ingrese un numero."));
		acumulador += numero;
		contador +=1;
	}

	promedio = acumulador/contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN