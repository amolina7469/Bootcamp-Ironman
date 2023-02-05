
Console.WriteLine("Introduce un número:");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce otro número:");
var num2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce el último número:");
var num3 = Convert.ToInt32(Console.ReadLine());

if (num > num2 && num > 3)
{
    Console.WriteLine($"El {num} es mayor que {num2} y {num3}");
}
else if (num2 > num3 && num2 > num)
{
    Console.WriteLine($"El {num2} es mayor que {num} y {num3}");
}
else
{
    Console.WriteLine($"El {num3} es mayor que {num} y {num2}");
}