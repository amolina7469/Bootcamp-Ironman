
Console.WriteLine("Introduce un número: ");
var x = Console.ReadLine();
try
{
    Convert.ToInt32(x);
    Console.WriteLine("Es un número.");
}
catch (FormatException)
{
    Console.WriteLine("No es un número.");
}
catch (OverflowException)
{
    Console.WriteLine("No es un número.");
}
catch (Exception ex)
{
    Console.WriteLine($"Ha ocurrido un error inexperado {ex}");
}