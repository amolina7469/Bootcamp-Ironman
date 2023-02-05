using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HerenciaObjetos
{
    internal class Profesor : Persona
    {
        public void Explicar()
        {
            Console.WriteLine("Explicar");
        }

        public Profesor(string nombre) : base(nombre)
        {
            this.nombre = nombre;
        }
    }
}
