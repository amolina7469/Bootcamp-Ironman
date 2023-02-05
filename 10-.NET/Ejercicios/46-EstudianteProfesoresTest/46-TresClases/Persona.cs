using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _46_TresClases
{
    internal class Persona
    {
        public int Edad;

        public void Saludar()
        {
            Console.WriteLine("¡Hola!");
        }

        public void SetEdad(int edad)
        {
            Edad = edad;
        }
    }
}
