using _55.Linq.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _55.Linq.Servicios
{
    public class MetodosProfesor : IMetodosProfesor
    {
        List<Profesor> listaProfesores = Profesor.GetProfesores();
        List<Clase> listaClases = Clase.GetClases();
        List<Poblacion> listaPoblaciones = Poblacion.GetPoblaciones();

        public List<ProfesorExtendido> GetProfesoresExtendidos()
        {
            return (from profesor in listaProfesores
                    join poblacion in listaPoblaciones on profesor.PoblacionId equals poblacion.Id
                    join clase in listaClases on profesor.Clase equals clase.Numero
                    select new ProfesorExtendido
                    {
                        Nombre = profesor.Nombre,
                        FechaDeNacimiento = profesor.FechaDeNacimiento,
                        NombrePoblacion = poblacion.Nombre,
                        NombreClase = clase.Nombre
                    }).ToList();
        }

        public List<ProfesorExtendido> GetProfesoresExtendidos(string nombrePoblacion)
        {
            return (from profesor in listaProfesores
                    join poblacion in listaPoblaciones on profesor.PoblacionId equals poblacion.Id
                    join clase in listaClases on profesor.Clase equals clase.Numero
                    where poblacion.Nombre == nombrePoblacion
                    select new ProfesorExtendido
                    {
                        Nombre = profesor.Nombre,
                        FechaDeNacimiento = profesor.FechaDeNacimiento,
                        NombrePoblacion = poblacion.Nombre,
                        NombreClase = clase.Nombre
                    }).ToList();
        }

        public List<ProfesorExtendido> GetProfesoresExtendidos(int numeroPagina, int numeroRegistrosPagina)
        {
            var elementos_a_saltar = (numeroPagina - 1) * numeroRegistrosPagina;

            return (from profesor in listaProfesores
                    join poblacion in listaPoblaciones on profesor.PoblacionId equals poblacion.Id
                    join clase in listaClases on profesor.Clase equals clase.Numero
                    select new ProfesorExtendido
                    {
                        Nombre = profesor.Nombre,
                        FechaDeNacimiento = profesor.FechaDeNacimiento,
                        NombrePoblacion = poblacion.Nombre,
                        NombreClase = clase.Nombre
                    }).Skip(elementos_a_saltar).Take(numeroRegistrosPagina).ToList();
        }

        public List<ProfesorExtendido> GetProfesoresExtendidos(bool ordenAscendenteNombre)
        {
            var query = (from profesor in listaProfesores
                         join poblacion in listaPoblaciones on profesor.PoblacionId equals poblacion.Id
                         join clase in listaClases on profesor.Clase equals clase.Numero
                         select new ProfesorExtendido
                         {
                             Nombre = profesor.Nombre,
                             FechaDeNacimiento = profesor.FechaDeNacimiento,
                             NombrePoblacion = poblacion.Nombre,
                             NombreClase = clase.Nombre
                         });

            if (ordenAscendenteNombre)
            {
                return query.OrderBy(x => x.Nombre).ToList();
            }
            else
            {
                return query.OrderByDescending(x => x.Nombre).ToList();
            }
        }
    }
}