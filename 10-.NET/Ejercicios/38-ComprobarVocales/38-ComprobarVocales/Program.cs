
Console.WriteLine("Introduce un carácter: ");
var vocal = Console.ReadLine().ToLower();

switch (vocal)
{
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        Console.WriteLine("Es una vocal");
        break;
    default:
        Console.WriteLine("No es una vocal");
        break;
}
