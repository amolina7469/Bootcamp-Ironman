
Console.WriteLine("Inserta un número: ");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Inserta cuantas veces: ");
var veces = Convert.ToInt32(Console.ReadLine());

for (int i = 0; i < veces; i++)
{
    Console.Write(num);
}
