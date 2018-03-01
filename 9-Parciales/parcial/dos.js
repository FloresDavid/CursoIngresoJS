function Mostrar()
{
	var porcentajeDeDescuento;
	var importe;
	var descuento;
	var importeConDescuento;

	porcentajeDeDescuento = parseInt(prompt("Ingrese el descuento."));
	importe = parseInt(prompt("Ingrese el importe."));

	descuento = importe * porcentajeDeDescuento / 100;
	importeConDescuento = importe - descuento;

	document.getElementById('importeFinal').value = importeConDescuento;
}




// Se ingresa un porcentaje de descuento y el importe, mostrar cuanto se debe pagar 