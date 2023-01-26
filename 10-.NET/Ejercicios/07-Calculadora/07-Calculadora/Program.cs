namespace _07_Calculadora
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Introduce un número:");
            int num = int.Parse(Console.ReadLine());
         
            Console.WriteLine("Introduce otro número:");
            var num2 = int.Parse(Console.ReadLine());
          

            var suma = num + num2;
            Console.WriteLine("\n" + num + " + " + num2 + " = " + suma);

            var resta = num - num2;
            Console.WriteLine(num + " - " + num2 + " = " + resta);

            var mult = num * num2;
            Console.WriteLine(num + " * " + num2 + " = " + mult);

            var div = num / num2;
            Console.WriteLine(num + " / " + num2 + " = " + div);

            var modulo = num % num2;
            Console.WriteLine(num + " mod " + num2 + " = " + modulo);

        }
    }
}