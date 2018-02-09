/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	//se usa el document.GetElementById DESPUES EL IGUAL para reemplazar al prompt
	nombre = document.getElementById('elNombre').value;
	alert(nombre);
}


