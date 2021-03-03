//Enunciado:

//Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
//nombre
//Tipo curasada("libre";"presencial";"remota")
//cantidad de materias( mas de cero y menos de 8)
//Sexo ( femenino , masculino , no binario)
//Nota promedio (entre 0 y 10)
//edad (validar)

//se debe informar de existir, o informar que no existe , en el caso que corresponda.
//a) El nombre del mejor promedio que no sea masculino
//b) El nombre del mas joven de los alumnos entre los que la dan libre
//d) El promedio de nota por sexo
//f) La edad y nombre del que cursa mas materias que no sean en forma remota

function mostrar()
{
  var respuestaContinuar;
  var nombreIngresado;
  var tipoCursadaIngresada;
  var cantidadMateriasIngresadas;
  var cantidadMateriasIngresadasParseadas;
  var sexoIngresado;
  var notaPromedioIngresado;
  var notaPromedioIngresadoParseado;
  var edadIngresada;
  var edadIngresadaParseada;
  var contadorAlumnos;
  var mejorPromedioExcluyendoMasculinos;
  var nombreMejorPromedioExcluyendoMasculinos;
  var edadMasJovenAlumnosLibres;
  var nombreMasJovenAlumnosLibres;
  var promedioNotaMasculinos;
  var contadorAlumnosMasculinos;
  var promedioNotaFemeninos;
  var promedioNotaNoBinarios;
  var acumuladorNotaMasculinos;
  var acumuladorNotaNoBinarios;
  var acumuladorNotaFemeninos;
  var EdadCursaFormaRemota;
  var NombreCursaFormaRemota;
  var materiasDelQueCursaMas;
  var contadorAlumnosRemotos;

  contadorAlumnosRemotos = 0;
  acumuladorNotaFemeninos = 0;
  acumuladorNotaNoBinarios = 0;
  acumuladorNotaMasculinos = 0;
  contadorAlumnos = 0;
  contadorAlumnosFemeninos = 0;
  contadorAlumnosNoBinarios = 0;
  contadorAlumnosMasculinos = 0;
  contadorAlumnosLibres = 0;
  respuestaContinuar = true;

  while (respuestaContinuar == true)
      {
        nombreIngresado = prompt ("Ingrese su nombre.");
        while (isNaN(nombreIngresado)==false)
            {
              alert ("Ingresó cualquier cosa menos un nombre. Reingreselo como corresponde. No incluya números.");
              nombreIngresado = prompt ("Reingrese su nombre.");
            }

        tipoCursadaIngresada = prompt ("Ingrese el tipo de cursada correspondiente. ( libre - presencial - remota ).");
        while (tipoCursadaIngresada != "libre" && tipoCursadaIngresada != "presencial" && tipoCursadaIngresada != "remota")
            {
              alert ("El tipo de cursada que ingresó es inválido. Por favor verifique faltas ortográficas.");
              tipoCursadaIngresada = prompt ("Reingrese el tipo de cursada correspondiente. ( libre - presencial - remota ).");
            }

        cantidadMateriasIngresadas = prompt ("Ingrese la cantidad de materias. ( debe ser mas de 0 y menos de 8 ).");
        cantidadMateriasIngresadasParseadas = parseInt (cantidadMateriasIngresadas);
        while (cantidadMateriasIngresadasParseadas < 1 || cantidadMateriasIngresadasParseadas > 8 || isNaN(cantidadMateriasIngresadasParseadas)==true)
            {
              alert ("La cantidad de materias que ingresó es inválida. Por favor verifique que sea solo un número y que cumpla los parámetros.");
              cantidadMateriasIngresadas = prompt ("Reingrese la cantidad de materias. ( debe ser mas de 0 y menos de 8 ).");
              cantidadMateriasIngresadasParseadas = parseInt (cantidadMateriasIngresadas);
            }
        
        sexoIngresado = prompt ("Ingrese el sexo correspondiente. ( femenino - masculino - nobinario ). ");
        while (sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "nobinario")
            {
              alert ("El sexo que ingresó es inválido y no se encuentra en los parámetros establecidos. Verifique faltas ortográficas.");
              sexoIngresado = prompt ("Reingrese el sexo correspondiente. ( femenino - masculino - nobinario ). ");
            }    
        
        notaPromedioIngresado = prompt ("Ingrese su nota promedio (entre 0 y 10).");
        notaPromedioIngresadoParseado = parseInt (notaPromedioIngresado);
        while (notaPromedioIngresadoParseado < 0 || notaPromedioIngresadoParseado > 10 || isNaN(notaPromedioIngresadoParseado)==true)
            {
              alert ("La nota promedio que ingresó es inválida y no cumple los parámetros establecidos. Verifique que contenga sólo números.");
              notaPromedioIngresado = prompt ("Reingrese su nota promedio (entre 0 y 10).");
              notaPromedioIngresadoParseado = parseInt (notaPromedioIngresado);
            }   

        edadIngresada = prompt ("Ingrese la edad (recuerde que debe ser mayor de 18).");
        edadIngresadaParseada = parseInt (edadIngresada);
        while (edadIngresadaParseada < 18 || edadIngresadaParseada > 100 || isNaN(edadIngresadaParseada)==true)
            {
              alert ("La edad ingresada es menor o mayor a la establecida o contiene algun texto o letra. Verifique que sea solo numeros.");
              edadIngresada = prompt ("Ingrese la edad (recuerde que debe ser mayor de 18).");
              edadIngresadaParseada = parseInt (edadIngresada);
            }
         
        contadorAlumnos++;

        switch (sexoIngresado) 
            { 
              case "femenino":
                {
                  contadorAlumnosFemeninos++;

                  if (contadorAlumnosFemeninos == 1)
                      {
                        mejorPromedioExcluyendoMasculinos = notaPromedioIngresadoParseado;
                        nombreMejorPromedioExcluyendoMasculinos = nombreIngresado;
                      }
                  else if (notaPromedioIngresadoParseado > mejorPromedioExcluyendoMasculinos)
                      {
                        mejorPromedioExcluyendoMasculinos = notaPromedioIngresadoParseado;
                        nombreMejorPromedioExcluyendoMasculinos = nombreIngresado;
                      }

                    acumuladorNotaFemeninos = acumuladorNotaFemeninos + notaPromedioIngresado;   
                    promedioNotaFemeninos = acumuladorNotaFemeninos / contadorAlumnosFemeninos;


                  break;
                }
              
              case "nobinario":
                {
                  contadorAlumnosNoBinarios++;

                  if (contadorAlumnosNoBinarios == 1)
                      {
                        mejorPromedioExcluyendoMasculinos = notaPromedioIngresadoParseado;
                        nombreMejorPromedioExcluyendoMasculinos = nombreIngresado;
                      }
                  else if (notaPromedioIngresadoParseado > mejorPromedioExcluyendoMasculinos)
                      {
                        mejorPromedioExcluyendoMasculinos = notaPromedioIngresadoParseado;
                        nombreMejorPromedioExcluyendoMasculinos = nombreIngresado;
                      }

                  acumuladorNotaNoBinarios = acumuladorNotaNoBinarios + notaPromedioIngresado;   
                  promedioNotaNoBinarios = acumuladorNotaNoBinarios / contadorAlumnosNoBinarios;

                  break;   
                }

              case "masculino":
                  {
                    contadorAlumnosMasculinos++;

                    acumuladorNotaMasculinos = notaPromedioIngresadoParseado + acumuladorNotaMasculinos;
                    promedioNotaMasculinos = acumuladorNotaMasculinos / contadorAlumnosMasculinos;

                  break;
                  } 
            }

        if (tipoCursadaIngresada == "libre")
              
            {
              contadorAlumnosLibres++;

              if (contadorAlumnosLibres == 1)
                  {
                    edadMasJovenAlumnosLibres = edadIngresadaParseada;
                    nombreMasJovenAlumnosLibres = nombreIngresado;
                  }
              else if (edadIngresadaParseada < edadMasJovenAlumnosLibres)
                  {
                    edadMasJovenAlumnosLibres = edadIngresadaParseada;
                    nombreMasJovenAlumnosLibres = nombreIngresado;
                  }
            }
   
        
              if (tipoCursadaIngresada == "remota")
              {
                contadorAlumnosRemotos++;

                if (contadorAlumnosRemotos == 1)
                {
                  EdadCursaFormaRemota = edadIngresadaParseada;
                  NombreCursaFormaRemota = nombreIngresado;
                  materiasDelQueCursaMas = cantidadMateriasIngresadasParseadas;
                }

                else if (cantidadMateriasIngresadasParseadas > materiasDelQueCursaMas)
                {
                  EdadCursaFormaRemota = edadIngresadaParseada;
                  NombreCursaFormaRemota = nombreIngresado;
                  materiasDelQueCursaMas = cantidadMateriasIngresadasParseadas;
                }

              }

         respuestaContinuar = confirm ("¿Desea continuar con el ingreso de datos? (Comenzará de nuevo el formulario)");   
      }

      if (nombreMejorPromedioExcluyendoMasculinos == undefined)
      {
        nombreMejorPromedioExcluyendoMasculinos == "No se pudo calcular valor porque no hubo alumnos ingresados que no sean masculinos.";
      }

      if (nombreMasJovenAlumnosLibres == undefined)
      {
        nombreMasJovenAlumnosLibres = "No se pudo calcular valor porque no hubo alumnos libres ingresados.";
      }

      if (promedioNotaFemeninos == undefined)
      {
          promedioNotaFemeninos = "No se pudo calcular promedio porque no se ingresaron femeninos.";  
      }

      if (promedioNotaMasculinos == undefined)
      {
          promedioNotaMasculinos = "No se pudo calcular promedio porque no se ingresaron masculinos.";
      }

      if (promedioNotaNoBinarios == undefined)
      {
        promedioNotaNoBinarios = "No se pudo calcular promedio porque no se ingresaron no-binarios."
      }

      if (EdadCursaFormaRemota == undefined)
      {
        EdadCursaFormaRemota = "No hay edad ya que no hay alumnos que cursen de forma remota."
        NombreCursaFormaRemota = "No hay nombre ya que no hay alumnos que cursen de forma remota."
      }

      document.write ("El nombre del mejor promedio que no sea masculino es :"+nombreMejorPromedioExcluyendoMasculinos+" </br> El nombre del mas joven de los alumnos entre los que la dan libre es: "+nombreMasJovenAlumnosLibres+" </br> El promedio de nota por sexo es: "+" </br> Femeninos: "+promedioNotaFemeninos+"</br> NoBinarios: "+promedioNotaNoBinarios+"</br> La edad del que cursa mas materias que no sean en forma remota es:"+EdadCursaFormaRemota+" Su nombre es:"+NombreCursaFormaRemota);
}
