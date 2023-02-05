
var num = 0;
do
{
    Console.WriteLine("Introduce un número:");
    num = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine($"{num * 10}");
} while (num != 0);

