

Console.WriteLine("Introduce el número: ");
var x = Convert.ToInt32(Console.ReadLine());
Console.WriteLine();

for (int j = 0; j < 5; j++)
{
    Console.WriteLine($"{x}{x}{x}");
}