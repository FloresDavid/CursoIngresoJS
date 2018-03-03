//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;
	var importeConDescuento;

	importe = parseInt(prompt("Ingrese el importe."));

	iva = importe * 21 / 100;
	importeConDescuento = importe + iva;

	document.getElementById('importeFinal').value = importeConDescuento;
	alert("Funciona 2-EntradaSalida");
	
}

