using Interfaces;


var coche = new Coche(0);

Console.WriteLine("Introduce la cantidad de gasolina a repostar");
var gasolina = int.Parse(Console.ReadLine());

if (coche.Repostar(gasolina))
{
    coche.Conducir();
}


public interface IVehiculo
{
    void Conducir();
    bool Repostar(int gasolina);
}