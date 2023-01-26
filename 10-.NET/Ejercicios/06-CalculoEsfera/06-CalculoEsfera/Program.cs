namespace _06_CalculoEsfera
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Introduce el radio de la esfera:");
            var radio = Console.ReadLine();
            int intRadio = int.Parse(radio);
            var superficie = 4 * Math.PI * Math.Pow(intRadio, 2);
            var volumen = 4 / 3 * Math.PI * Math.Pow(intRadio, 3);
            Console.WriteLine("superficie: " + superficie);
            Console.WriteLine("volumen: " + volumen);

        }
    }
}