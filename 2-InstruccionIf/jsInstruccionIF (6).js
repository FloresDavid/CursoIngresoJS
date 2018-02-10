function Mostrar()
{	
	var edad;

	edad = parseInt(document.getElementById('edad').value);
	//tomo la edad  

	if (edad >= 18){
		alert ("La persona es mayor de edad.");
	}
	else if (edad < 18 && edad >= 13){
		alert ("La persona es adolescente.");
	}
	else{
    	alert ("La persona es un niño.");
	}

}//FIN DE LA FUNCIÓN