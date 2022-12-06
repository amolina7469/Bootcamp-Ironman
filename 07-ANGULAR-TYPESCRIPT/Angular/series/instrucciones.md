## APP series

    1. instalar bootstrap

            `````
            npm install bootstrap ✅

            `````
    y en el angular.json

            "node_modules/bootstrap/dist/css/bootstrap.min.css" ✅
            "node_modules/bootstrap/dist/js/bootstrap.min.js" ✅

    2 . Componentes - ¿Cuantos? 8

              header ✅
              itemList ✅
              card ✅
              characterView ✅
              serieView ✅
                  - casting ✅
                  - seasons ✅
              filters ✅

              {path: 'serie/:id', component: serieView, children: [
                {path:'casting', component: Casting}
              ]}

    3 . Interfaces ¿Cuantos y cuales necesito? 2
        Interfaces es singular   
            serie ✅
            character ✅

    4 . Servicios. Van de la mano de los interfaces, casi siempre son los mismos. Servicios plural

            series ✅
            characters ✅

    5 Enlazar servicios con interfaces y dbs ✅

    6. Rutas. Cuantas, formacion cada ruta,. ¿Tenemos rutas  dinamicas o activas? ¿Rutas hijas?. La ruta inicial sea el listado de series. ✅

    7. Cargar en la ruta series el listado de series correspondiente con la maquetacion que vosotros elijais.✅

    8. Usar el componente card para cargar la imagen y el titulo de la serie✅
   
    9.  Cuando hagamos click en la serie iremos a la SerieView y cargaremos toda la informacion de la serie.✅

    10. Dentro de serieView Cargaremos dos componente casting y seasons, en el componente seasons pintaremos por consola el listado de personajes de cada serie.✅

    11. Reutilizr el cardComponent para que perimta visualizar tambien personajes✅

    12. Habría que averiguar como detectar en que ruta estática y pintamos la lista de personajes y series ✅ 
    13. Pintar un personaje en la vista personaje (characterView) toda la info del actor/actriz y un botón de ir a su serie, y un botón de volver a personajes. 
    14. En el componente seasons cargar todas las temporadas que tiene series.✅
    15. Maquetar el header✅
    16. Filtros, tenemos que tener 2 botones que me permitan cargar series y personajes.✅
    17. Ocultar la barra lateral en el componente ✅
    18. Filtro por canal de tv. Un selector que nos filtre sólo las series por canal. en le listado de personajes no se tiene que ver dicho filtro.✅
    19. Ese filtro se llena con todos los canales del array de series. Ojo que vienen canales repetidos.Quiero que busqueis alguna forma de quitar los repetidos. GOOGLE



