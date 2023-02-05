
Console.WriteLine("Introduce un número");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce la operación");
var op = Console.ReadLine();
Console.WriteLine("Introduce un número");
var num2 = Convert.ToInt32(Console.ReadLine());



if (op == "+")
{
    Console.WriteLine($"{num}+{num2}={num + num2}");
}
else if (op == "-")
{
    Console.WriteLine($"{num}-{num2}={num - num2}");
}
else if (op == "x")
{
    Console.WriteLine($"{num}x{num2}={num * num2}");
}
else if (op == "/")
{
    Console.WriteLine($"{num}/{num2}={num / num2}");
}
else
{
    Console.WriteLine("La operción solicitada no existe");
}