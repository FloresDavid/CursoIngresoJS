function Mostrar()
{	
	var edad;

	edad = document.getElementById('edad').value;
	//tomo la edad  

	if (edad >= 18 && estadoCivil.value == "Soltero")
	{
		alert ("Es soltero y no es menor.");	
	}


}//FIN DE LA FUNCIÓN