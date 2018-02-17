/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var juegoIniciado;

juegoIniciado = false;

function comenzar()
{
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	//Genero el número RANDOM entre 1 y 100
	 console.log(numeroSecreto);
	 contadorIntentos = 0;
	 document.getElementById('FormIngreso').reset();
	 juegoIniciado = true;
		//alert(numeroSecreto );

}

function verificar()
{
	numeroIngresado = document.getElementById('numero').value;

	if (juegoIniciado == true)
	{
		if (numeroIngresado > 100)
		{
			alert ("Ingrese un numero del 1 al 100.");
		}
		else
		{
			contadorIntentos += 1;

			document.getElementById('intentos').value = contadorIntentos;

			if (contadorIntentos > 10)
			{
				alert ("há superado la cantidad de intentos disponibles, juego reiniciado.");
				comenzar();
				return;
			}

			if (contadorIntentos == 1 && numeroIngresado == numeroSecreto)
			{
				alert ("No podes ganar a la primera porque yo lo digo, juego reiniciado.");
				comenzar();
			}
			else
			{
				if (numeroIngresado == numeroSecreto)
				{
					alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos, juego reiniciado.");
					comenzar();
				}

				else if (numeroIngresado > numeroSecreto)
				{
					alert ("Se pasó...");
				}

				else
				{
					alert ("Falta...");
				}
			}
		}
	}
	else
	{
		alert ("Presione comenzar para iniciar el juego.");
	}
}