/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var suma;

	//parseInt se usa para convertir los datos a enteros y así poder sumarlos, en vez de concatenarlos

	uno=parseInt(document.getElementById('numeroUno').value);
	dos=parseInt(document.getElementById('numeroDos').value);

	//al juntar la toma de variables con el parseInt me saltee un paso, que seria el pasarlos de str a int

	suma = uno + dos;

	alert("La suma es " + suma);

}

