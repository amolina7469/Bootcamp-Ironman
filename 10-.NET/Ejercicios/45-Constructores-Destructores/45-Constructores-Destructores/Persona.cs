using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _45_Constructores_Destructores
{
    public class Persona
    {
        public string Nombre { get; set; }

        public Persona(string nombre)//Constructor
        {
            Nombre = nombre;
        }
        public override string ToString()//Sobreescribímos el método ToString
        {
            return "¡Hola! Mi nombre es " + Nombre;
        }

        ~Persona()//Destructor
        {
            Nombre = "";
        }
    }
}
