//Enunciado:
//Bienvenidos.
//debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
//Nombre,
//estado civil ("soltero", "casado" o "viudo"),
//edad( solo mayores de edad, mas de 17),
//temperatura corporal(validar por favor)
//y sexo (validar).
//NOTA:el precio por pasajero es de $600.
//Se debe informar (solo si corresponde):
//a) La cantidad de personas con estado "viudo" de mas de 60 años.
//b) el nombre y edad de la mujer soltera mas joven.
//c) cuanto sale el viaje total sin descuento.
//d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.



function mostrar()
{
	var respuestaContinuar;
	var nombreIngresado;
	var estadoCivilIngresado;
	var edadIngresada;
	var edadIngresadaParseada;
	var temperaturaCorporal;
	var temperaturaCorporalParseada;
	var sexoIngresado;	
	var contadorViudosMasde60;
	var contadorMujeres;
	var edadMujerMasJoven;
	var nombreMujerMasJoven;
	var viajeSinDescuento;
	var contadorPasajeros;
	var porcentajeAdultosPasajeros;
	var porcentajePasajeros;
	var contadordeViejos;
	var precioPasajePorCabeza;
	var viajeConDescuentoParaMayores;
	
	precioPasajePorCabeza = 600;
	contadordeViejos = 0;
	contadorPasajeros = 0;
	contadorMujeres = 0;
	contadorViudosMasde60 = 0;
	respuestaContinuar = true;

	while (respuestaContinuar == true)
	{
		nombreIngresado = prompt ("Ingrese su nombre.");
		while (isNaN (nombreIngresado)==false )
			{
				alert ("Ingresó un nombre con números. Por favor ingresá tu nombre correspondiente.");
				nombreIngresado = prompt ("Ingrese su nombre.");
			}

		estadoCivilIngresado = prompt ("Ingrese su estado civil. (soltero - casado - viudo)");
		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
			{
				alert ("Ingresó un estado civil inválido. Por favor reintentalo y cumplí los parámetros.");
				estadoCivilIngresado = prompt ("Ingrese su estado civil. (soltero - casado - viudo)");
			}

		edadIngresada = prompt ("Ingrese su edad. Recuerde que debe ser mayor de 18.");
		edadIngresadaParseada = parseInt (edadIngresada);
		while (isNaN(edadIngresadaParseada)==true || edadIngresadaParseada < 18)
			{
				alert ("Ingresó una edad inválida. Recuerde ser mayor de 18. Verifique ortografía.")
				edadIngresada = prompt ("Reingrese su edad. Recuerde que debe ser mayor de 18.");
				edadIngresadaParseada = parseInt (edadIngresada);
			}	

		temperaturaCorporal = prompt ("Ingrese su temperatura corporal. (Recuerde que el número que ingresa es en grados Celsius).");
		temperaturaCorporalParseada = parseInt (temperaturaCorporal);
			while (temperaturaCorporal < 30 || temperaturaCorporal > 46 || isNaN (temperaturaCorporalParseada)==true)
				{
					alert ("La temperatura corporal ingresada es inválida. Por favor verifique si está en Celsius y cumple una temperatura coherente .")
					temperaturaCorporal = prompt ("Reingrese su temperatura corporal. (Recuerde que el número que ingresa es en grados Celsius).");
					temperaturaCorporalParseada = parseInt (temperaturaCorporal);
				}

		sexoIngresado = prompt ("Ingrese su sexo. ( hombre - mujer - nobinario). ");
		while (sexoIngresado != "hombre" && sexoIngresado != "mujer" && sexoIngresado != "nobinario")
			{
				alert ("El sexo que ingresó es inválido. Por favor verifique faltas ortográficas.");
				sexoIngresado = prompt ("Reingrese su sexo. ( hombre - mujer - nobinario). ");
			}	

			contadorPasajeros++;
			viajeSinDescuento = contadorPasajeros * precioPasajePorCabeza //(porque es el precio x pasajero)


		if (estadoCivilIngresado == "viudo" && edadIngresadaParseada >= 60)
			{
				contadorViudosMasde60++;
			}

		if (sexoIngresado == "mujer")
			{
				contadorMujeres++;

				if (contadorMujeres == 1)
					{
						edadMujerMasJoven = edadIngresadaParseada;
						nombreMujerMasJoven = nombreIngresado;
					}

				else if (edadIngresadaParseada > edadMujerMasJoven)
					{
						edadMujerMasJoven = edadIngresadaParseada;
						nombreMujerMasJoven = nombreIngresado;
					}
			}

		if (edadIngresadaParseada > 60)
		{
			contadordeViejos++;
		}


			// cantidad de pasajeros (ej 10) = 100%
			// cantidad de viejos ej (2) = ? 
			// 2x100/10
			// cantidad de viejos x 100 / cantidad de pasajeros

		
		porcentajeAdultosPasajeros = (contadordeViejos * 100) / contadorPasajeros;

		
		if (porcentajeAdultosPasajeros > 50) //significa entonces que mas del 50% son gente vieja. porque ese valor esta pasado a porcentaje.
			{
				viajeConDescuentoParaMayores = viajeSinDescuento - (viajeSinDescuento * 0.25);
			}

		document.write ("La cantidad de personas con estado viudo de mas de 60 años es: "+contadorViudosMasde60+"</br> El nombre de la mujer soltera mas joven es: "+nombreMujerMasJoven+" y su edad es: "+edadMujerMasJoven+" </br> El viaje total sin descuento es de: "+viajeSinDescuento);

		if (viajeConDescuentoParaMayores != undefined) 
			{
				alert ("El verdadero valor del viaje es de: "+viajeConDescuentoParaMayores)+" Ya que hay mas del 50% de pasajeros que son mayores.";
			}


	}	
}


