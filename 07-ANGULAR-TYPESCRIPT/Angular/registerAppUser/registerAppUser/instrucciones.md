### Register App User

    1. Vamos a crear los componentes de la parte pública
        - Home: donde se carga cierta información de la página. en este caso un mensaje y 2 botones.
        - Register: donde cargaremos un form de tipo model con validaciones
        - Login: donde cargaremos un formulario de tipo template sin validaciones.
  
    2. El proceso de login me devolverá un token que me debe dar acceso a uan parte privada, cuya ruta es /dashboard. Ha esa parte no podré acceder sin estar logado. GUARDS(clausulas de guarda)
   
    3. Pintar dentro de dashboard un componente como ruta hija (dashboard/productos) el listado de productos paginado (anterior y siguiente), del siguiente servicio. https://peticiones.online/products Gestionarlo con promises