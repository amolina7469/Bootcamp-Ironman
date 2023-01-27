
Console.WriteLine("Introduce un número para crear su tabla de multiplicar: ");

var numero = Convert.ToInt32(Console.ReadLine());
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine($"{numero} X {i} = {numero * i}");
}
