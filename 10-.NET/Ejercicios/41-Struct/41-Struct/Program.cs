Persona persona = new Persona();

Console.WriteLine("Introduce un nombre:");
persona.Name = Console.ReadLine();
Console.WriteLine("Introduce la edad:");
persona.Age = Convert.ToInt32(Console.ReadLine());

Console.WriteLine($"¡Hola,{persona.Name}!");

struct Persona
{
    public string Name;
    public int Age;
}