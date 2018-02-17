/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio = 35;
 	var cantidadDeLamparitas;
 	var marca;
 	var precioDeLamparitasCompradas;
 	var descuento;
 	var precioFinal;
 	var ingresosBrutos;

 	cantidadDeLamparitas = document.getElementById('Cantidad').value;
 	marca = document.getElementById('Marca').value;

 	precioDeLamparitasCompradas = precio * cantidadDeLamparitas;

 	switch (cantidadDeLamparitas)
 	{
 		case "6":
 			descuento = precioDeLamparitasCompradas / 2;
 			break;
 		case "5":
 			if (marca == "ArgentinaLuz")
 			{
 				descuento = precioDeLamparitasCompradas * 2 / 5;
 				break;
 			}
 			else
 			{
 				descuento = precioDeLamparitasCompradas * 3 / 10;
 				break;
 			}
 		case "4":
 			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 				descuento = precioDeLamparitasCompradas / 4;
 				break;
 			}
 			else
 			{
 				descuento = precioDeLamparitasCompradas / 5;
 				break;
 			}
 		case "3":
 			if (marca == "ArgentinaLuz")
 			{
 				descuento = precioDeLamparitasCompradas * 15 / 100;
 				break;
 			}
 			else if (marca == "FelipeLamparas")
 			{
 				descuento = precioDeLamparitasCompradas / 10;
 				break;
 			}
 			else
 			{
 				descuento = precioDeLamparitasCompradas / 20;
 				break;
 			} 			
 	}

	precioFinal = precioDeLamparitasCompradas - descuento;
 	
 	if (precioFinal > 120)
 	{
 		ingresosBrutos = precioFinal / 10;
 		precioFinal = precioFinal + ingresosBrutos;
 		alert("Usted pago " + ingresosBrutos + " de IIBB.")
 	}

 	
 	document.getElementById('precioDescuento').value = precioFinal;

}
