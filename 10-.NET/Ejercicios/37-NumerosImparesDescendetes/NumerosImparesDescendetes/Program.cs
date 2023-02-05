
Console.WriteLine("Introduce un número: ");
var num = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Introduce otro número menor que el anterior: ");
var num2 = Convert.ToInt32(Console.ReadLine());

if (num > num2)
{
    for (int i = num; i >= num2; i--)
    {
        if (i % 2 != 0)
        {
            Console.Write($"{i} ");
        }
    }
}
else
{
    Console.WriteLine("El números introducidos no son correcto");
}
