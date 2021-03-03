//Enunciado:
//Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
//de cada una debo obtener los siguientes datos:
//el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
//el precio (validar entre 100 y 300),
//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
//Se debe Informar al usuario lo siguiente:
//a) El promedio de cantidad por tipo de producto
//b) El tipo de inflamable con más cantidad de unidades en total de la compra
//c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
//d) la marca y tipo del más caro de los productos

function mostrar()
{
	var tipoProductoIngresado;
	var precioIngresado;
	var precioIngresadoParseado;
	var cantidadUnidadesIngresadas; 
	var cantidadUnidadesIngresadasParseado;
	var tipoInflamableIngresado;
	var marcaDelProducto;
	var promedioCantidadAlcohol;
	var acumuladorCantidadAlcohol;
	var contadorAlcohol;
	var promedioCantidadIac;
	var acumuladorCantidadIac;
	var contadorIac;
	var promedioCantidadQuat;
	var acumuladorCantidadQuat;
	var contadorQuat;
	var inflamableMasUnidades;
	var nombreInflamaleMasUnidades;
	var tipoInflamableMasUnidades;
	var acumuladorCantidadIacPrecioMenoresA200;
	var marcaMasCaroProducto;
	var tipoMasCaroProducto;
	var valorMasCaroProducto;

		contadorIac = 0;
		contadorAlcohol = 0;
		contadorQuat = 0;
		acumuladorCantidadAlcohol = 0;
		acumuladorCantidadIac = 0;
		acumuladorCantidadQuat = 0;
		acumuladorCantidadIacPrecioMenoresA200 = 0;



			for ( var i = 1 ; i < 6 ; i++)
					{
						tipoProductoIngresado = prompt ("Ingrese el tipo de producto. ( ALCOHOL - IAC - QUAT ).");
						while (tipoProductoIngresado != "ALCOHOL" && tipoProductoIngresado != "IAC" && tipoProductoIngresado != "QUAT")
							{
								alert ("El tipo de producto que ingresó es inválido. Revise su ortografía.");
								tipoProductoIngresado = prompt ("Reingrese el tipo de producto. ( ALCOHOL - IAC - QUAT ).");
							}
						
						precioIngresado = prompt ("Ingrese el precio del producto. ( de 100 a 300 ).");
						precioIngresadoParseado = parseInt(precioIngresado);
						while (precioIngresadoParseado < 100 || precioIngresadoParseado > 300 || isNaN (precioIngresadoParseado)==true)
							{
								alert ("El precio que ingresó es inválido. Revise los parámetros. Recuerde no incluir texto.");
								precioIngresado = prompt ("Reingrese el precio del producto. ( de 100 a 300 ).");
								precioIngresadoParseado = parseInt (precioIngresado);
							}

						cantidadUnidadesIngresadas = prompt ("Ingrese la cantidad de unidades de su producto. ( de 1 a 1000 ).");
						cantidadUnidadesIngresadasParseado = parseInt (cantidadUnidadesIngresadas);
						while (cantidadUnidadesIngresadasParseado < 1 || cantidadUnidadesIngresadasParseado > 1000 || isNaN(cantidadUnidadesIngresadasParseado)==true)
							{
								alert ("La cantidad de unidades que ingresó es inválida. Revise los parámetros. Recuerde no incluir texto.");
								cantidadUnidadesIngresadas = prompt ("Reingrese la cantidad de unidades de su producto. ( de 1 a 1000 ).");
								cantidadUnidadesIngresadasParseado = parseInt (cantidadUnidadesIngresadas);
							}

						tipoInflamableIngresado = prompt ("Ingrese el tipo de inflamable del producto. ( ignifugo - combustible - explosivo ).");
						while (tipoInflamableIngresado != "ignifugo" && tipoInflamableIngresado != "combustible" && tipoInflamableIngresado != "explosivo")
							{
								alert ("El tipo de inflamable que ingresó es inválido. Reintentelo. Verifique faltas ortográficas.");
								tipoInflamableIngresado = prompt ("Reingrese el tipo de inflamable del producto. ( ignifugo - combustible - explosivo ).");
							}

						marcaDelProducto = prompt ("Ingrese la marca del producto.");

						if (i == 1)
							{
								valorMasCaroProducto = precioIngresadoParseado;
								tipoMasCaroProducto = tipoProductoIngresado;
								marcaMasCaroProducto = marcaDelProducto;
							}
						else if (precioIngresadoParseado > valorMasCaroProducto)
							{
								valorMasCaroProducto = precioIngresadoParseado;
								tipoMasCaroProducto = tipoProductoIngresado;
								marcaMasCaroProducto = marcaDelProducto;
							}    

						switch (tipoProductoIngresado) 
						{
							case "ALCOHOL":
								{
									acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadUnidadesIngresadasParseado;
									contadorAlcohol++;
									break;
								}

							case "IAC":
								{
									acumuladorCantidadIac = cantidadUnidadesIngresadasParseado + acumuladorCantidadIac;
									contadorIac++;
									if (precioIngresadoParseado <= 200)
										{
											acumuladorCantidadIacPrecioMenoresA200 = acumuladorCantidadIacPrecioMenoresA200 + cantidadUnidadesIngresadasParseado;
										}

									break; 
								}
							
							case "QUAT":
								{
									acumuladorCantidadQuat = cantidadUnidadesIngresadasParseado + acumuladorCantidadQuat;
									contadorQuat++;
									break;
								}
						}

						if (i == 1)
							{
								inflamableMasUnidades = cantidadUnidadesIngresadasParseado; 
								nombreInflamaleMasUnidades = marcaDelProducto;
								tipoInflamableMasUnidades = tipoInflamableIngresado;
							}

					else 
							{
								switch (tipoInflamableIngresado) 
										{
											case "ingnífugo":
												{
													if (cantidadUnidadesIngresadasParseado > inflamableMasUnidades)
														{
															inflamableMasUnidades = cantidadUnidadesIngresadasParseado;
															nombreInflamaleMasUnidades = marcaDelProducto;
															tipoInflamableMasUnidades = "ingnifugo.";
														}      
													break;     
												}

											case "explosivo":
												{
													if (cantidadUnidadesIngresadasParseado > inflamableMasUnidades)
														{
															inflamableMasUnidades = cantidadUnidadesIngresadasParseado;
															nombreInflamaleMasUnidades = marcaDelProducto;
															tipoInflamableMasUnidades = "explosivo.";
														} 
													break;
												}
												
											case "combustible":
												{
													if (cantidadUnidadesIngresadasParseado > inflamableMasUnidades)
														{
															inflamableMasUnidades = cantidadUnidadesIngresadasParseado;
															nombreInflamaleMasUnidades = marcaDelProducto;
															tipoInflamableMasUnidades = "combustible.";
														} 
													break;
												}
										}
							}
					}

			promedioCantidadAlcohol = acumuladorCantidadAlcohol / contadorAlcohol;
			promedioCantidadIac = acumuladorCantidadIac / contadorIac;
			promedioCantidadQuat = acumuladorCantidadQuat / contadorQuat;

			document.write ("El promedio de cantidad por tipo de producto es el siguiente. </br> Alcohol: "+promedioCantidadAlcohol+" </br> IAC: "+promedioCantidadIac+" </br> QUAT: "+promedioCantidadQuat+" </br> El tipo de inflamable con más cantidad de unidades en total de la compra es: "+tipoInflamableMasUnidades+" </br> Las unidades totales de IAC con precios menos a 200 (inclusive) que se compraron en total son de: "+acumuladorCantidadIacPrecioMenoresA200+" </br> La marca y el tipo del más caro de los productos es el siguiente: </br> Marca: "+marcaMasCaroProducto+" </br> Tipo: "+tipoMasCaroProducto);
}
