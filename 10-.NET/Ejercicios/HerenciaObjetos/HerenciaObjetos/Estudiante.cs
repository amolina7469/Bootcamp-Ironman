using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HerenciaObjetos
{
    internal class Estudiante : Persona
    {
        public void Estudiar()
        {
            Console.WriteLine("Estudiar");
        }

        public Estudiante(string nombre) : base(nombre)
        {
            this.nombre = nombre;
        }
    }
}
