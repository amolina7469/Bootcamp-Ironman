using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    internal class Coche : IVehiculo
    {
        public int Gasolina { get; set; }

        public Coche(int gasolina)
        {
            this.Gasolina = gasolina;
        }

        public void Conducir()
        {
            if (Gasolina > 0)
            {
                Console.WriteLine("Conduciendo");
            }
            else
            {
                Console.WriteLine("No hay gasolina");
            }
        }

        public bool Repostar(int cantidad)
        {
            Gasolina += cantidad;
            return true;
        }
    }
}