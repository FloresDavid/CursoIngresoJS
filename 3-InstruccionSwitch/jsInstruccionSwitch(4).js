function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	switch(mesDelAño) {
		case "Febrero":
			alert ("Este mes tiene 28 días (29 en años biciestos)");
			break
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":	
		case "Diciembre":
			alert ("Este mes tiene 31 días");
			break
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert ("Este mes tiene 30 días");
	}
		



}//FIN DE LA FUNCIÓN