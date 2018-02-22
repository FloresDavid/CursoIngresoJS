function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	numero = parseInt(prompt ("Ingrese un numero"));

	while (numero != 0)
	{
		
		if (numero > 0)
		{
			positivo += numero;
		}
		else
		{
			negativo *= numero;
		}
		numero = parseInt(prompt("Ingrese otro numero (0 para terminar)"));
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN