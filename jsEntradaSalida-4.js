/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre = prompt("Ingresa tu nombre");
	//se usa el document.GetElementById ANTES DEL IGUAL para reemplazar al alert
	document.getElementById('elNombre').value = nombre
}

