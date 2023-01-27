

Console.WriteLine("Introduce un número: ");
var x = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce otro número: ");
var y = Convert.ToInt32(Console.ReadLine());

for (int i = 0; i < y; i++)
{
    Console.WriteLine();
    for (int j = 0; j < y; j++)
    {
        Console.Write(x);
    }

}
