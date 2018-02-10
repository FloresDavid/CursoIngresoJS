function Mostrar()
{	var edad;

	edad = parseInt(document.getElementById('edad').value);
	//tomo la edad  

	if (edad < 13 || edad > 17){
		alert ("La persona no es adolescente.");
	}

}//FIN DE LA FUNCIÓN