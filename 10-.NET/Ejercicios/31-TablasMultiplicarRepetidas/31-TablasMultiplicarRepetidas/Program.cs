
Console.WriteLine("Introduce un número: ");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce otro número: ");
var num2 = Convert.ToInt32(Console.ReadLine());

for (int i = num; i <= num2; i++)
{
    Console.WriteLine();
    for (int j = 1; j <= 10; j++)
    {
        Console.WriteLine($"{i} x {j} = {num * j}");

    }
}
