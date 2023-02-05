
using HerenciaObjetos;

Persona[] persona = new Persona[3];


for (int i = 0; i < 3; i++)
{
    if (i == 0)
    {
        Console.WriteLine("Introduce nombre: ");
        persona[i] = new Profesor(Console.ReadLine());
    }
    else
    {
        Console.WriteLine("Introduce nombre: ");
        persona[i] = new Estudiante(Console.ReadLine());
    }
}

for (int i = 0; i < 3; i++)
{
    if (i == 0)
    {
        ((Profesor)persona[i]).Explicar();

    }
    else
    {
        ((Estudiante)persona[i]).Estudiar();
    }
}

