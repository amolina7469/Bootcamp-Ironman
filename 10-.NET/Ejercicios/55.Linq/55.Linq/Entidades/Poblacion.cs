using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _55.Linq.Entidades
{
    public class Poblacion
    {
        public string Nombre { get; set; }

        public string Provincia { get; set; }

        public string Comunidad { get; set; }

        public int Codigo { get; set; }

        public static List<Poblacion> GetPoblaciones()
        {
            return new List<Poblacion>
            {
                new Poblacion { Nombre = "Vera", Provincia = "Almeria", Comunidad = "Andalucía", Codigo = 1 },
                new Poblacion { Nombre = "Algemesí", Provincia = "Valencia", Comunidad = "Comunidad Valenciana", Codigo = 2 },
                new Poblacion { Nombre = "El Masnou", Provincia = "Barcelona", Comunidad = "Cataluña", Codigo = 3 },
                new Poblacion { Nombre = "Talavera de la reina", Provincia = "Toledo", Comunidad = "Castilla la Mancha", Codigo = 4 }
            };

        }
    }

}
