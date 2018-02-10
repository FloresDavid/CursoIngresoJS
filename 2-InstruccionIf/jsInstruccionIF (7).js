function Mostrar()
{	
	var edad;

	edad = parseInt(document.getElementById('edad').value);
	//tomo la edad  

	if (edad < 18 && estadoCivil.value != "Soltero"){
		alert ("Es muy pequeño para NO ser soltero.");
	}	
}//FIN DE LA FUNCIÓN