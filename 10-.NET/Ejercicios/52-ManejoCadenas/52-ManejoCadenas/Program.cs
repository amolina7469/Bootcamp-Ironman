var cadena = "Estoy probando implementaciones de cadenas";
string[] palabras = cadena.Split(' ');

Console.WriteLine(cadena.Length);
Console.WriteLine(palabras.Length);
Console.WriteLine(cadena.Replace("probando", "estudiando"));
Console.WriteLine(Array.IndexOf(palabras, "implementaciones"));

var posicion = Array.IndexOf(palabras, "implementaciones");
Console.WriteLine(palabras[posicion].ToCharArray().Length);


