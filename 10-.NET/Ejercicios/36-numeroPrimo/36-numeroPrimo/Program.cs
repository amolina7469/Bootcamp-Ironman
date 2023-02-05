
Console.WriteLine("Introduce un número: ");
var num = Convert.ToInt32(Console.ReadLine());
bool primo = true;

for (int i = 2; i < num; i++)
{
    if (num % i == 0)
    {
        primo = false;
    }

}

if (primo == true)
{
    Console.WriteLine($"El {num} es primo");
}
else
{
    Console.WriteLine($"El {num} no es primo");
}

