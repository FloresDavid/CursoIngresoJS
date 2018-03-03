//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var metrosDeAlambre;

	largo = document.getElementById('largo').value;
	ancho = document.getElementById('ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = largo + ancho * 2;
	metrosDeAlambre = perimetro * 6;

	alert("Se necesitan " + metrosDeAlambre + "m de alambre.");

	
}

