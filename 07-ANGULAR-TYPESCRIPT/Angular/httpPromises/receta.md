### Como hacer peticiones HTTP(API_REST) en angular

    1. Necesitamos importar el modulo HttpClientModule en el app.module.ts.
        -import { HttpClientModule } from '@angular/common/http'
    
    2. Necesitamos usar el módulo HttpClientModule a través de su librería httpClient, esta librería es un inyectable ( como los services, router,...) pero está pensado para ir dentro de un servicio. Que es el que se encarga de los datos.
   
    3. httpClient me permite hacer peticiones a través de observables (subscribe), pero esto se puede onvertir en promesas.

    4. a partir de la petición enviaremos al componente los datos solicitados por los métodos convenientes (getAll, getbyId,...)