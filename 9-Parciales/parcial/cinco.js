function Mostrar()
{

	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var mayor;
	var bandera = 0;

	primerNumero = prompt("Ingrese un numero.");
	segundoNumero = prompt("Ingrese un segundo numero.");
	tercerNumero = prompt("Ingrese un tercer numero.");
	
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	tercerNumero = parseInt(tercerNumero);

	mayor = primerNumero;
	
	if (segundoNumero > mayor)
	{
		mayor = segundoNumero
	}
	if (tercerNumero > mayor)
	{
		mayor = tercerNumero;
	}

	document.write("El numero mayor es: " + mayor);
}



//ingresar 3 numeros y mostrar el mayor