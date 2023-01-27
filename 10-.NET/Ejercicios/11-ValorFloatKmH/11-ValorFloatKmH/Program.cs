
Console.WriteLine("Introduce la distancia en metros: ");
var metros = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Tiempo necesario en horas: ");
var horas = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Tiempo necesario en minutos: ");
var minutos = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Tiempo necesario en segundos: ");
var segundos = Convert.ToDouble(Console.ReadLine());


var metroSeg = metros / (segundos + (minutos * 60) + (horas * 120));
Console.WriteLine("\n" + metroSeg);

var kmHora = (metros / 1000) / (horas + (minutos / 60) + (segundos / 3600));
Console.WriteLine(kmHora);

var millasHora = kmHora * 0.621371;
Console.WriteLine(millasHora);