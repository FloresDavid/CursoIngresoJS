function Mostrar()
{
	var nombreDelAnimal;
	var pesoDelAnimal = 0;
	var temperaturaDelHabitat;
	var pesoMayor = 0;
	var nombreDelAnimalMasPesado;
	var menorTemperaturaDeHabitat = 40;
	var nombreDelAnimalDeTemperaturaDeHabitatMasBaja;
	var cantidadTemperaturasPares = 0;
	var pesoTotalDeAnimales = 0;
	var cantidadDeAnimales = 0;
	var promedioDePeso;
	var temperaturaMaxima;
	var temperaturaMinima;
	var respuesta = "si";


	while (respuesta == "si")
	{
		nombreDelAnimal = prompt("Ingrese el nombre del animal.");
		
		pesoDelAnimal = prompt("Ingrese el peso del animal.");
		pesoDelAnimal = parseInt(pesoDelAnimal);
		
		while (pesoDelAnimal < 1 || isNaN(pesoDelAnimal))
		{
			pesoDelAnimal = prompt("Ingrese el peso del animal.");
		}
		
		temperaturaDelHabitat = prompt("Ingrese la temperatura del habitat del animal.")
		temperaturaDelHabitat = parseInt(temperaturaDelHabitat);

		while (temperaturaDelHabitat > 40 || temperaturaDelHabitat < -40 || isNaN(temperaturaDelHabitat))
		{
			temperaturaDelHabitat = prompt("Ingrese la temperatura correcta del habitat del animal.")
		}

		if (pesoDelAnimal > pesoMayor)
		{
			pesoMayor = pesoDelAnimal;
			nombreDelAnimalMasPesado = nombreDelAnimal;
		}
		if (temperaturaDelHabitat < menorTemperaturaDeHabitat)
		{
			menorTemperaturaDeHabitat = temperaturaDelHabitat;
			nombreDelAnimalDeTemperaturaDeHabitatMasBaja = nombreDelAnimal;
		}
		if (temperaturaDelHabitat %2 == 0 && temperaturaDelHabitat != 0)
		{
			cantidadTemperaturasPares += 1;
		}

		cantidadDeAnimales += 1;
		pesoTotalDeAnimales += pesoDelAnimal;






			respuesta = prompt("¿Quiere seguir ingresando animales? (¿si o no?)")
	}
	promedioDePeso = pesoTotalDeAnimales / cantidadDeAnimales;

	document.write("El nombre del animal mas pesado es: " + nombreDelAnimalMasPesado + "<br> El nombre del animal de la temperatura de habitat mas baja es: " + nombreDelAnimalDeTemperaturaDeHabitatMasBaja + "<br>");
}



/* se piden 3 datos hasta que el cliente quiera
datos son: nombre del animal, peso del animal, temperatura del habitat del animal (entre -40 y 40)

informar el nombre del animal mas pesado, el nombre del animal de la temperatura mas baja, la cantidad 
de temperaturas pares, promedio del peso de todos los animales, la temperatura maxima y la minima.
*/