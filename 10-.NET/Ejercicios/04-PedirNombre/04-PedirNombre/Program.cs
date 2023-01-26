namespace _04_PedirNombre
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("¿Cómo te llamas?");
            var nombre = Console.ReadLine();
            Console.WriteLine("Encantado de conocerte " + nombre);
        }
    }
}