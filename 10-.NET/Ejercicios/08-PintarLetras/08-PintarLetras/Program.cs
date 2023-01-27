namespace _08_PintarLetras
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] letras = new string[3];
            Console.WriteLine("Introduce un caracter:");
            letras[0] = Console.ReadLine();
            Console.WriteLine("Introduce otro caracter:");
            letras[1] = Console.ReadLine();
            Console.WriteLine("Introduce el último caracter:");
            letras[2] = Console.ReadLine();


            Console.WriteLine("{0} {1} {2}", letras[2], letras[1], letras[0]);
        }
    }
}