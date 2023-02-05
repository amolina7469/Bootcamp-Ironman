
using System;

Console.WriteLine("Introduce una nota: ");
var nota = Convert.ToInt32(Console.Read());

switch (nota)
{
    case 10:
        Console.WriteLine("Matrícula de honor");
        break;
    case 9:
        Console.WriteLine("Sobresaliente");
        break;
    case 8:
    case 7:
        Console.WriteLine("Notable");
        break;
    case 6:
        Console.WriteLine("Bien");
        break;
    case 5:
        Console.WriteLine("Aprobado");
        break;
    default:
        Console.WriteLine("Suspenso");
        break;
}