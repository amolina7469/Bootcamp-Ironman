using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _46_TresClases
{
    public class EstudianteProfesorTest
    {
        public static void Main()
        {
            Persona persona = new Persona();

            persona.Saludar();

            Estudiante estudiante = new Estudiante();

            estudiante.Saludar();
            estudiante.SetEdad(21);
            estudiante.VerEdad();
            estudiante.Estudiar();

            Profesor profesor = new Profesor();

            profesor.SetEdad(58);
            profesor.Saludar();
            profesor.Explicar();
        }
    }
}
