using _55.Linq.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualBasic;

namespace _55.Linq.Servicios
{
    public class MetodosAlumnos : IMetodosAlumnos
    {
        List<Alumno> alumnos = Alumno.GetAlumnos();
        List<Clase> clases = Clase.GetClases();
        List<Poblacion> poblaciones = Poblacion.GetPoblaciones();

        public List<AlumnoExtendido> GetAlumnosJoin()
        {
            var listaAlumnos = from alumno in alumnos
                               join clase in clases on alumno.Clase equals clase.Numero
                               join poblacion in poblaciones on alumno.Poblacion equals poblacion.Codigo
                               select new AlumnoExtendido
                               {
                                   NombreAlumno = alumno.Nombre,
                                   FechaNacimiento = alumno.FechaDeNacimiento,
                                   NotaMediaAlumno = alumno.Notas.Average(),
                                   NombreClase = clase.Nombre,
                                   NombrePoblacion = poblacion.Nombre
                               };


            return listaAlumnos.ToList();
        }

        public List<AlumnoExtendido> GetAlumnosJoin(string letra, int pagina, int registros)
        {
            var listaAlumnos = from alumno in alumnos
                               join clase in clases on alumno.Clase equals clase.Numero
                               where alumno.Nombre.StartsWith(letra)
                               select new AlumnoExtendido
                               {
                                   NombreAlumno = alumno.Nombre,
                                   FechaNacimiento = alumno.FechaDeNacimiento,
                                   NotaMediaAlumno = alumno.Notas.Average(),
                                   NombreClase = clase.Nombre
                               };

            return listaAlumnos.Skip((pagina - 1) * registros).Take(registros).ToList();
        }

        public List<AlumnoExtendido> GetAlumnosJoin(double notaMedia)
        {
            var listaAlumnos = from alumno in alumnos
                               join clase in clases on alumno.Clase equals clase.Numero
                               let avg = alumno.Notas.Average()
                               where avg >= notaMedia
                               select new AlumnoExtendido
                               {
                                   NombreAlumno = alumno.Nombre,
                                   FechaNacimiento = alumno.FechaDeNacimiento,
                                   NotaMediaAlumno = alumno.Notas.Average(),
                                   NombreClase = clase.Nombre
                               };

            return listaAlumnos.ToList();
        }

        public List<AlumnoExtendido> GetAlumnosJoin(DateTime fechaNacimiento)
        {
            var listaAlumnos = from alumno in alumnos
                               join clase in clases on alumno.Clase equals clase.Numero
                               where alumno.FechaDeNacimiento >= fechaNacimiento
                               select new AlumnoExtendido
                               {
                                   NombreAlumno = alumno.Nombre,
                                   FechaNacimiento = alumno.FechaDeNacimiento,
                                   NotaMediaAlumno = alumno.Notas.Average(),
                                   NombreClase = clase.Nombre
                               };

            return listaAlumnos.ToList();
        }

        public List<AlumnoExtendido> GetAlumnosJoin(DateTime fechaInicio, DateTime fechaFin)
        {
            var listaAlumnos = from alumno in alumnos
                               join clase in clases on alumno.Clase equals clase.Numero
                               where alumno.FechaDeNacimiento >= fechaInicio && alumno.FechaDeNacimiento <= fechaFin
                               select new AlumnoExtendido
                               {
                                   NombreAlumno = alumno.Nombre,
                                   FechaNacimiento = alumno.FechaDeNacimiento,
                                   NotaMediaAlumno = alumno.Notas.Average(),
                                   NombreClase = clase.Nombre
                               };

            return listaAlumnos.ToList();
        }
    }
}

