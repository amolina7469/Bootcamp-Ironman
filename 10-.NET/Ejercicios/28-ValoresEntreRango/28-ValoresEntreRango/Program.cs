
Console.WriteLine("Inserta un número: ");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Inserta otro número: ");
var num2 = Convert.ToInt32(Console.ReadLine());

for (int i = num; i <= num2; i++)
{
    Console.Write($"{i}, ");
}
