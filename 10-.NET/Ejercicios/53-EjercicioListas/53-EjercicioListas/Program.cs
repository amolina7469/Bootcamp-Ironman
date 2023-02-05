using System.Collections;

List<int> numList = new List<int>();
numList.Add(1);
numList.Add(2);
numList.Add(3);

List<int> numList2 = new List<int>();
numList2.Add(4);
numList2.Add(5);
numList2.Add(6);

foreach (var num in numList2)
{
    numList.Add(num);
}

foreach (var num in numList)
{
    Console.Write(num);
}

Console.WriteLine();
Console.WriteLine(numList.Count);
Console.WriteLine(numList2.Count);
Console.WriteLine();
numList.RemoveAt(0);
foreach (var num in numList)
{
    Console.WriteLine(num);
}

Console.WriteLine();
numList.RemoveAt(2);
foreach (var num in numList)
{
    Console.WriteLine(num);
}

Console.WriteLine();
numList.Add(1);
foreach (var num in numList)
{
    Console.WriteLine(num);
}

Console.WriteLine();
numList.OrderBy(x => x).ToList();
foreach (var num in numList)
{
    Console.WriteLine(num);
}