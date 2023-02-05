using _55.Linq.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _55.Linq.Servicios
{
    public interface IMetodosProfesor
    {
        List<ProfesorExtendido> GetProfesoresExtendidos();
        List<ProfesorExtendido> GetProfesoresExtendidos(string NombrePoblacion);
        List<ProfesorExtendido> GetProfesoresExtendidos(int numeroPagina, int numeroRegistrosPagina);
        List<ProfesorExtendido> GetProfesoresExtendidos(bool ordenAscendenteNombre);

    }
}
