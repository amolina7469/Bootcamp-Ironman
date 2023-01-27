
Console.WriteLine("Introduce los grados centigrados: ");
var celsius = Convert.ToInt32(Console.ReadLine());
var kelvin = celsius + 273;
var farenheit = celsius * 18 / 10 + 32;
Console.WriteLine("{0} grados celsius son " + kelvin + " grados kelvin", celsius);
Console.WriteLine("{0} grados celsius son " + farenheit + " grados farenheit", celsius);
