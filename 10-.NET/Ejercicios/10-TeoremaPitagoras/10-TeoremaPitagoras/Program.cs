
Console.WriteLine("Introduce el ancho: ");
var ancho = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Introduce la altura: ");
var altura = Convert.ToInt32(Console.ReadLine());

var perimetro = (ancho * 2) + (altura * 2);
var area = ancho * altura;
var diagonal = Math.Sqrt(Math.Pow(ancho, 2) + Math.Pow(altura, 2));

Console.WriteLine($"El perimetro es {perimetro}");
Console.WriteLine($"El área es {area}");
Console.WriteLine($"La diagonal es {diagonal}");
