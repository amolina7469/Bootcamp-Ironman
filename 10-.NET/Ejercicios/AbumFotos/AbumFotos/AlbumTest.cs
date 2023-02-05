using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbumFotos
{
    internal class AlbumTest
    {
        public static void Main()
        {
            AlbumFotos album = new AlbumFotos();
            Console.WriteLine(album.GetNumeroPaginas());

            AlbumFotos album2 = new AlbumFotos(24);
            Console.WriteLine(album2.GetNumeroPaginas());

            SuperAlbumFotos superAlbum = new SuperAlbumFotos();
            Console.WriteLine(superAlbum.GetNumeroPaginas());

        }
    }
}
