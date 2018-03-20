#include <stdio.h>
#include <stdlib.h>

int main()
{
    int base;
    int altura;
    int area;
    int perimetro;

    printf ("Ingrese la base de un triangulo equilatero: ");
    scanf ("%d", &base);

    printf ("Ingrese la altura del triangulo: ");
    scanf ("%d", &altura);

    perimetro = base * 3;

    area = (base * altura) /2;

    printf ("El perimetro del triangulo es: %d, y el area es: %d", perimetro, area);
    return 0;
}
