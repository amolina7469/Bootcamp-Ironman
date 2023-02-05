

Console.WriteLine("Introducir valor de la compra");
var x = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Introducir dinero que entrega el cliente: ");
var y = Convert.ToInt32(Console.ReadLine());

var vuelta = y - x;


while (vuelta >= 50)
{
    vuelta = vuelta - 50;
    Console.Write("50 ");
}
while (vuelta >= 20)
{
    vuelta = vuelta - 20;
    Console.Write("20 ");
}
while (vuelta >= 10)
{
    vuelta = vuelta - 10;
    Console.Write("10 ");
}
while (vuelta >= 5)
{
    vuelta = vuelta - 5;
    Console.Write("5 ");
}
while (vuelta >= 2)
{
    vuelta = vuelta - 2;
    Console.Write("2 ");
}
while (vuelta >= 1)
{
    vuelta = vuelta - 1;
    Console.Write("1 ");
}



