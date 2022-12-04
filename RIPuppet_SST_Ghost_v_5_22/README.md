# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Pruebas de exploración sistemática con RIPuppet
Este proyecto permite realizar pruebas de exploración sistema de interfaz gráfica o GUI haciendo uso del API RIPuppet, el cual a través de una heurística predefinida inicia la exploración de la aplicación bajo pruebas interactuando con el cuerpo DOM de esta.

## Estructura del proyecto
En el directorio raíz del proyecto, se encuentran tanto archivos de configuración del proyecto de Node, como los archivos relacionados a la lógica y los reportes:

![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/aee2ff34a8773aec.png)

**Imagen 1**. Estructura de archivos del proyecto RIPuppet

Los archivos `package.json` y `package-lock.json` contienen las dependencias de `npm` que el proyecto requiere para funcionar y permitirán su correcta instalación. Los archivos index.html y main.css contienen los archivos de base que se utilizarán para reportar los resultados de ejecución. El archivo index.js contiene la lógica que junta el explorador de interfaz y el generador de reportes. Finalmente, el archivo `config.json` contiene los parámetros de configuración que determinarán características particulares de la prueba.
Puede explorar en mayor detalle el contenido de cada uno de estos archivos a su gusto.
## Detalles sobre la lógica
La forma en que RIPuppet desarrolla la prueba consiste en una exploración recursiva de los estados de la aplicación web guiada por la interacción con los elementos de la página web que ofrecen funcionalidad al usuario.
Un estado de la aplicación corresponde a una vista que se activa para el usuario según las interacciones que haya tenido con ella. Esto no solo se traduce en las distintas rutas o URL de la aplicación web, sino a cualquier cambio que normalmente induciría un usuario y se ve reflejado en el DOM.
El primer paso de la herramienta consiste en la lectura de los parámetros de configuración. Luego de esto, para cada uno de los navegadores, se genera un contexto de ejecución y unos directorios que almacenarán los resultados de la prueba.
Una vez todo está listo, se llama la ejecución recursiva. Cuando esta finaliza, se genera el reporte correspondiente.

### Detalles sobre la lógica
Durante la exploración recursiva, en cada estado de la aplicación web, RIPuppet consulta los elementos disponibles en el árbol DOM de la página web actual e interactúa con aquellos que están diseñados para ofrecer funcionalidades y cambios de estado al usuario. Estos elementos y sus interacciones son:

-	Enlaces: hipervínculos insertados que llevan a otras direcciones web. La interacción consiste en hacer clic y típicamente se cambia la URL del navegador.
-	Botones: elementos con texto o imágenes y un recuadro donde hacer clic. La interacción consiste en hacer clic y ejecutar una función, cuyo comportamiento puede ser muy variado.
-	Campos de entrada: elementos que conforman formularios y están diseñados para aceptar entradas de texto o, en algunas ocasiones, hacer clic.
-	Listas desplegables: elementos que contienen varias opciones, las cuales se despliegan en una lista para que el usuario pueda elegir una de ellas.
Luego de cada interacción, se evalúa la necesidad de crear un nuevo estado, y en caso de ser necesario, se agrega al árbol de estados y se llama nuevamente a la exploración recursiva desde allí.

## Instalación de la herramienta
Para utilizar hacer uso este proyecto, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Desde una terminal se ejecuta el comando `npm install` en la carpeta raíz del proyecto (`./RIPuppet_SST_Ghost_v_5_22/`); esto instalara los módulos de Resemble y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de playwright (https://playwright.dev/), faker (https://fakerjs.dev/), firebase (https://firebase.google.com/) y node-html-parser (https://www.npmjs.com/package/node-html-parser).
## Configuración de la herramienta

Ahora que tiene el código fuente descargado en su máquina, puede explorarlo y usarlo. Lo primero que debe conocer es el archivo de configuración, pues este le permite establecer los parámetros necesarios para ejecutar su prueba. A continuación, se explicará la estructura general:

![image](https://drive.google.com/uc?export=view&id=1rRbz5IoHADi5t09m20r0sR1d1_JDn_W6)

**Imagen 2**. Contenido por defecto del archivo `config.json`

En la imagen anterior se muestra el contenido del archivo config.json. El parámetro url indica la dirección de la página web que se va a probar. El parámetro headless es un booleano que indica si el navegador se va a ejecutar en modo headless (sin interfaz gráfica). El parámetro depthLevels indica qué tantos niveles de profundidad debe tener el árbol generado a partir de las interacciones posibles en la interfaz gráfica. El parámetro inputValues es un booleano que indica si se deben utilizar credenciales o los valores del parámetro values. Los parámetros al interior del parámetro values son utilizados para introducir valores específicos a campos del sitio web: en este caso, la llave corresponde al id del elemento en el DOM y el valor corresponde a la cadena de texto que se introducirá en el campo con dicho id. Finalmente, el parámetro browsers indica en qué navegadores se quiere probar la página y puede tomar los valores "chromium", "webkit" o "firefox".

## Ejecución
Una vez realizada la configuración del archivo `config.json` para lanzar la ejecucón de las pruebas, a través de la terminal ejecute el siguiente comando: `node index.js`

## Explorar los resultados

En primer lugar, podrá ver que la terminal desde la que ejecutó la prueba le brindará una retroalimentación sobre el proceso. Esta retroalimentación es extensiva e incluye el navegador en el que actualmente se está ejecutando la prueba, luego un listado de nodos y enlaces disponibles para cada estado, el stack de los errores que han ocurrido (si los hay) y algunas líneas informativas sobre el estado de la prueba.

Además, podrá ver que en la ruta donde está ubicada el proyecto se creó un directorio con el nombre "results". Al abrirlo, podrá ver un subdirectorio cuyo nombre corresponde a la fecha y hora en la que se obtuvo el reporte de ejecución de la prueba en formato ISO. Cada vez que ejecute una prueba, se creará uno muy similar con esta convención. Dentro de cada uno, podrá ver un subdirectorio para cada uno de los navegadores donde se interactuó con la página web. En estos se encuentran las capturas de pantalla que se tomaron durante la prueba, tres archivos en formato JSON con información de los grafos y un archivo report.html.

Para poder ver el contenido del reporte en su navegador web, debe servir los archivos en un puerto. Esto quiere decir, crear un servidor sencillo que aloje los archivos en su máquina local. Este proceso es bastante sencillo y para lograrlo únicamente necesita tener instalado npm en su máquina (como se indicó en la sección de introducción del tutorial).

En una terminal, ubíquese en el directorio `./results`. Desde allí, ejecute el siguiente comando para instalar la librería http-server de Node.js:

`npm install -g http-server`

Ahora que cuenta con esta herramienta en su computadora, ejecute el siguiente comando para crear un servidor local con los archivos del directorio actual:

`http-server`

Desde su terminal podrá ver el siguiente resultado:
![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/b6e9954d7a182ec9.png)

**Imagen 3**. Retroalimentación de http-server

Ahora puede acceder desde un navegador a la dirección que se le indica en la consola, que suele ser localhost:8080. Allí podrá ver la siguiente pantalla:

![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/54c9212ce2cd8ea8.png)

**Imagen 4**. Página inicial del servidor

Haga clic en el directorio del reporte y podrá ver los directorios para cada navegador, como se ve en la siguiente imagen:

![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/54c9212ce2cd8ea8.png)

**Imagen 5.** Directorios creados en una ejecución

Seleccione, por ejemplo, el directorio chromium/. Ahora podrá ver los archivos que hacen parte del reporte, como se ve en la siguiente imagen:

![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/5bcd6ee3779493cf.png)

**Imagen 6.** Archivos contenidos en el directorio de un navegador

Haga clic en el archivo report.html y podrá ver el reporte. Este contiene tres secciones: las páginas web visitadas, el detalle de un estado y los errores del estado seleccionado. El contenido de las últimas dos secciones cambia según el nodo al que se le ha hecho clic del grafo de la primera sección.

Seleccione el nodo 6 en el grafo de la primera sección, el cual se muestra en la siguiente imagen:

![image](https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper/img/e86a2634fcad35b4.png)

**Imagen 7.** Ejemplo de un grafo de ejecución