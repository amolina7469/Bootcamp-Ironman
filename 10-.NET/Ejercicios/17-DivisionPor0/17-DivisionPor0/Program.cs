
Console.WriteLine("Introduce un numero: ");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce otro numero: ");
var num2 = Convert.ToInt32(Console.ReadLine());

try
{
    Console.WriteLine("\n" + num / num2);
}
catch (DivideByZeroException)
{
    Console.WriteLine($"\n No se puede dividir {num} por cero.");
}