
Console.WriteLine("Inserta un número: ");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Inserta un número: ");
var num2 = Convert.ToInt32(Console.ReadLine());
var suma = 0;

for (int i = 0; i < num2; i++)
{
    suma += num;
}
Console.WriteLine($"{num} x {num2} = {suma}");
