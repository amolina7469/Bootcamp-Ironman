using _55.Linq.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _55.Linq.Servicios
{
    public interface IMetodosAlumnos
    {
        List<AlumnoExtendido> GetAlumnosJoin();
        List<AlumnoExtendido> GetAlumnosJoin(string letra, int pagina, int registros);
        List<AlumnoExtendido> GetAlumnosJoin(double notaMedia);
        List<AlumnoExtendido> GetAlumnosJoin(DateTime fechaNacimiento);
        List<AlumnoExtendido> GetAlumnosJoin(DateTime fechaInicio, DateTime fechaFin);


    }
}
