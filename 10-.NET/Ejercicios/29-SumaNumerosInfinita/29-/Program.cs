
var num = 0;
var suma = 0;
do
{
    Console.WriteLine("Introduce un valor: ");
    num = Convert.ToInt32(Console.ReadLine());
    suma = suma + num;
    if (num != 0)
    {
        Console.WriteLine(suma);
    }
    else
    {
        Console.WriteLine("Terminado");

    }
} while (num != 0);

