
using _45_Constructores_Destructores;


Persona[] personas = new Persona[3];



for (int i = 0; i < 3; i++)
{
    Console.WriteLine("Introduce un nombre: ");
    personas[i] = new Persona(Console.ReadLine());
}


for (int i = 0; i < 3; i++)
{
    Console.WriteLine($"¡Hola! mi nombre es {personas[i].ToString()}");
}

