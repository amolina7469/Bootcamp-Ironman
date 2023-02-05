var cadena = "Hola";
var frase = "ESTOY dando CLASE de .NET";

Console.WriteLine($"La tercera letra de hola es {cadena.Substring(2, 1)}");
Console.WriteLine($"La tercera longitud de hola es {cadena.Length}");
Console.WriteLine($"Una subcadena de hola es {cadena.Substring(1, 3)}");



Console.WriteLine(frase.Replace("clase de .NET", "la clase de angular"));
String[] palabras = frase.Split(' ');
Console.WriteLine($"Estoy dando clase de .NET tiene {palabras.Length} palabras");


Console.WriteLine($".NET es la palabra número {palabra} de la frase Estoy dando clase de .NET");
Console.Read();

