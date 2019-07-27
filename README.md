# Prueba Desarrollador FULLSTACK 3Astronautas
Desarrollado por: Diego Carreño
JULIO 26TH, DE 2019
## Contenido de la solucion:
Esta solucion tiene como objetivo mostrar mi punto de vista para resolver este reto, que incluye desarrollo tanto de backend como frontend.
### Backend
En la carpeta NestJS se encuentra la solucion backend, en la que se incluye los siguientes modulos:
  - **1-controllers**, donde se creo el servicio get que expone la informacion de los planetas a traves de un response en lenguaje json.
  - **2-services**: encargado de cargar la informacion de la fuente de datos, en este caso el archivo json ***"planetas.json"***.
  - **3-common**: donde se guardan todos los archivos que pueden ser utilizados en toda la solucion. Aca se incluyo el archivo json que posteriormente se utilizara en la solucion.
Luego de correr los siguientes comandos:
```sh
$ cd NestJS
$ npm install
$ npm run start
```
Podra ejecutar la solucion *backend*, porfavor ingresar a la url http://localhost:3000/planetas.

### FrontEnd
En la carpeta Angular se encuentra la solucion para frontend, en la que se incluye los siguientes modulos:
  - **1-components**, donde se creon los componentes que se utilizan dinamicamente para que trabajando juntos cumplan el proposito de la solucion.
  - **2-services**: encargado de cargar la informacion de la fuente de datos, en este caso el servicio rest expuesto por la solucion *backend*.
  - **3-common**: donde se guardan todos los archivos que pueden ser utilizados en toda la solucion. Aca se incluyo el archivo de configuracion llamado **PlanetasRestUrl** que posteriormente es utilizado para saber a que url se llamara el servicio REST. Para cambiar este valor, abrir el archivo **src/app/3-common/config.ts**

Luego de correr los siguientes comandos:
```sh
$ cd Angular
$ npm install
$ ng serve
```
Para ejecutar la solucion *frontend*, porfavor ingresar a la url http://localhost:4200/.
> Esta aplicacion tiene varios propositos,
> el primero es ingresando a la url en este [enlace principal](http://localhost:4200/control) 
> en el que al dar click en el boton **IGNITE**, el contador 
> ira disminuyendo hasta llegar a cero.
> Por otro lado, ingresando a la url [enlace planetas](http://localhost:4200/planetas/mercurio), 
> se llamara al backend para traer la informacion de los planetas
> y cargar la informacion relacionado con el texto ingresado en 
> **/planetas/{nombre del planeta}** a travez de la url.

### Contacto
Para mas informacion y soporte, contactar a DIEGO CARREÑO, correo: deg17@hotmail.com.
Desarrollador de software.
Muchas gracias!