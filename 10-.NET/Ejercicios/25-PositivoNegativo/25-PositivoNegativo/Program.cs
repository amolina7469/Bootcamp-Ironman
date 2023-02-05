
Console.WriteLine("Introduce un número: ");
var num = Convert.ToInt32(Console.ReadLine());

if (num > 0)
{
    Console.WriteLine($"El {num} es positivo");
}
else if (num < 0)
{
    Console.WriteLine($"El {num} es negativo");
}
else
{
    Console.WriteLine("El número es 0");
}
