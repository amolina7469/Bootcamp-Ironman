
Console.WriteLine("Introduce un número:");
var numMin = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce otro número mayor que el anterior:");
var numMax = Convert.ToInt32(Console.ReadLine());

var random = new Random();
Console.WriteLine($"{random.Next(numMin + 1, numMax)}");
