Console.WriteLine("Introduce un nombre: ");
var name = Console.ReadLine();

Saludo(name);
Despedida();


static void Saludo(string name)
{
    Console.WriteLine($"Hola {name}");
}

static void Despedida()
{
    Console.WriteLine("Adiós!");
}