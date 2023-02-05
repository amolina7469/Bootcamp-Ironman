

using _55.Linq.Entidades;
using _55.Linq.Servicios;
using Microsoft.Win32;

IMetodosAlumnos metodosAlumnos = new MetodosAlumnos();

Enunciado1();
Enunciado3();
Enunciado4();
Enunciado5();
Enunciado6();
Enunciado8();

void Enunciado1()
{
    var listadoAlumnos = metodosAlumnos.GetAlumnosJoin();
    Console.ForegroundColor = ConsoleColor.DarkMagenta;
    Console.WriteLine("--------------------Alumnos con información extendida-----------------------------------------");
    Console.ResetColor();
    Console.WriteLine();
    MostrarDatosAlumnos(listadoAlumnos);
}

void Enunciado3()
{
    var letra = "R";
    var pagina1 = 1;
    var pagina2 = 2;
    var registros = 2;

    var listadoAlumnos = metodosAlumnos.GetAlumnosJoin(letra, pagina1, registros);
    Console.ForegroundColor = ConsoleColor.DarkMagenta;
    Console.WriteLine($"--------------------Alumnos que empiezan por {letra}------------------------------------------------");
    Console.ResetColor();
    Console.WriteLine();
    MostrarDatosAlumnos(listadoAlumnos);

    var listadoAlumnos2 = metodosAlumnos.GetAlumnosJoin(letra, pagina2, registros);
    MostrarDatosAlumnos(listadoAlumnos2);
}

void Enunciado4()
{
    double notaMedia = 7;
    var listadoAlumnos = metodosAlumnos.GetAlumnosJoin(notaMedia);
    Console.ForegroundColor = ConsoleColor.DarkMagenta;
    Console.WriteLine($"--------------------Alumnos con nota media mayor que {notaMedia}---------------------------------------");
    Console.ResetColor();
    Console.WriteLine();
    MostrarDatosAlumnos(listadoAlumnos);
}

void Enunciado5()
{
    var fechaNacimiento = new DateTime(2003, 3, 12);
    var listadoAlumnos = metodosAlumnos.GetAlumnosJoin(fechaNacimiento);
    Console.ForegroundColor = ConsoleColor.DarkMagenta;
    Console.WriteLine($"--------------------Alumnos que nacieron despues de {fechaNacimiento.ToShortDateString()}------------------------");
    Console.ResetColor();
    Console.WriteLine();
    MostrarDatosAlumnos(listadoAlumnos);
}

void Enunciado6()
{
    var fechaInicio = new DateTime(2001, 5, 25);
    var fechaFin = new DateTime(2002, 7, 2);
    var listadoAlumnos = metodosAlumnos.GetAlumnosJoin(fechaInicio, fechaFin);
    Console.ForegroundColor = ConsoleColor.DarkMagenta;
    Console.WriteLine($"--------------------Alumnos que nacieron entre {fechaInicio.ToShortDateString()} y {fechaFin.ToShortDateString()}--------");
    Console.ResetColor();
    Console.WriteLine();
    MostrarDatosAlumnos(listadoAlumnos);
}

void Enunciado8()
{
    var listadoProfesores = MetodosProfesor.GetProfesoresExtendidos();

    Console.WriteLine("Listado de profesores con poblacion y clase");
    MostrarDatosProfesores(listadoProfesores);

    var poblacion = "Madrid";
    var listadoProfesoresPoblacion = MetodosProfesor.GetProfesoresExtendidos(poblacion);
    Console.WriteLine($"Listado de profesores de la población {poblacion}");
    MostrarDatosProfesores(listadoProfesoresPoblacion);

    var numPagina = 1;
    var registrosPorPagina = 4;
    var listadoProfesoresPagina1 = MetodosProfesor.GetProfesoresExtendidos(numPagina, registrosPorPagina);
    Console.WriteLine($"Listado de profesores pagina {numPagina} con {registrosPorPagina} elementos");
    MostrarDatosProfesores(listadoProfesoresPagina1);

    numPagina = 2;
    var listadoProfesoresPagina2 = MetodosProfesor.GetProfesoresExtendidos(numPagina, registrosPorPagina);
    Console.WriteLine($"Listado de profesores pagina {numPagina} con {registrosPorPagina} elementos");
    MostrarDatosProfesores(listadoProfesoresPagina2);

    bool esOrdenAscendente = true;
    var listadoProfesoresAscendente = MetodosProfesor.GetProfesoresExtendidos(esOrdenAscendente);
    Console.WriteLine($"Listado profesores en orden {(esOrdenAscendente ? "Ascendente" : "Descendente")}");
    MostrarDatosProfesores(listadoProfesoresAscendente);

    esOrdenAscendente = false;
    var listadoProfesoresDescendente = MetodosProfesor.GetProfesoresExtendidos(esOrdenAscendente);
    Console.WriteLine($"Listado profesores en orden {(esOrdenAscendente ? "Ascendente" : "Descendente")}");
    MostrarDatosProfesores(listadoProfesoresDescendente);
}


void MostrarDatosAlumnos(List<AlumnoExtendido> alumnos)
{
    foreach (var alumno in alumnos)
    {
        Console.WriteLine($"Nombre: {alumno.NombreAlumno} " +
                          $"FechaNacimiento: {alumno.FechaNacimiento.ToShortDateString()} " +
                          $"NombreClase: {alumno.NombreClase} " +
                          $"NotaMedia: {alumno.NotaMediaAlumno} " +
                          $"NombrePoblacion: {alumno.NombrePoblacion}");
    }

    Console.WriteLine();
}

void MostrarDatosProfesores(List<ProfesorExtendido> listadoProfesores)
{
    foreach (var profesor in listadoProfesores)
    {
        Console.WriteLine($"Profesor: {profesor.Nombre} " +
                          $"FechaNacimiento: {profesor.FechaDeNacimiento.ToShortDateString()} " +
                          $"NombreClase: {profesor.NombreClase} " +
                          $"Población: {profesor.NombrePoblacion}");
    }

    Console.WriteLine();
}