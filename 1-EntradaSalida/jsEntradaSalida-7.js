/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


	var uno;
	var dos;
	var suma;
	var resta;
	var multiplicacion;
	var division;

function sumar()
{
	uno=parseInt(document.getElementById('numeroUno').value);
	dos=parseInt(document.getElementById('numeroDos').value);

	suma = uno + dos;

	alert ("La suma es " + suma);
}

function restar()
{
	uno=parseInt(document.getElementById('numeroUno').value);
	dos=parseInt(document.getElementById('numeroDos').value);

	resta = uno - dos;

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	uno=parseInt(document.getElementById('numeroUno').value);
	dos=parseInt(document.getElementById('numeroDos').value);

	multiplicacion = uno * dos;

	alert("La multiplicacion es " + multiplicacion);
}

function dividir()
{
	uno=parseInt(document.getElementById('numeroUno').value);
	dos=parseInt(document.getElementById('numeroDos').value);

	division = uno / dos;

	alert("La division es " + division); 
}