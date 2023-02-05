
Console.WriteLine("Introduce un número: ");
string num = Console.ReadLine();
int digitos = num.Length;
var signo = num.Substring(0, 1);

if (signo == "-")
{
    Console.WriteLine($"Advertencia el número es negativo");
    Console.WriteLine($"El número tiene {digitos - 1} dígitos");
}
else
{
    Console.WriteLine($"El número tiene {digitos} dígitos");
}







