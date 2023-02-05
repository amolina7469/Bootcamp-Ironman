Console.WriteLine("Introduce un número");
var num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce la operación");
var op = Console.ReadLine();
Console.WriteLine("Introduce un número");
var num2 = Convert.ToInt32(Console.ReadLine());



switch (op)
{
    case "+":
        Console.WriteLine($"{num}+{num2}={num + num2}");
        break;
    case "-":
        Console.WriteLine($"{num}-{num2}={num - num2}");
        break;
    case "x":
        Console.WriteLine($"{num}x{num2}={num * num2}");
        break;
    case "/":
        if (num2 == 0 || num2 > num)
        {
            Console.WriteLine("La operción solicitada no existe");
            break;
        }
        else
        {
            Console.WriteLine($"{num}/{num2}={num / num2}");
            break;
        }

    default:
        Console.WriteLine("La operción solicitada no existe");
        break;
}
