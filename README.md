# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Proyecto Automatización De Pruebas De Software

Este proyecto recopila los diferentes proyectos construidos durante el curso, los cuales tienen como objetivo realizar pruebas a la aplicación bajo pruebas (ABP) Ghost (https://ghost.org/), haciendo uso de APIs de Automatización como Cypress (https://www.cypress.io/) y Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/) para la creación de pruebas de extremo a extremo y para expandir estas pruebas se implementaron estrategias de generación de datos como Pool de datos a-priori, Pool de datos (pseudo) aleatorio dinámico y Escenario aleatorios.
<br>Adicional a lo anterior se crearon proyectos con Monkey y Ripper Testing para pruebas de reconocimiento tanto aleatorias como sistemáticas, y por último se generó un proyecto de pruebas de regresión visual a través del uso del API de comparación ResembleJS (https://rsmbl.github.io/Resemble.js/) 


A continuación, se explica el detalle de los diferentes proyectos: 

## Funcionalidades a probar 
| Funcionalidades principales de Ghost| 
| ----- |
| Members |
| Pages |
| Posts |
| Staff |
| Login |

## Escenarios de prueba 
Cada proyecto cuenta con una suite de pruebas que contempla la ejecución de diferentes casos de pruebas relacionadas con las funcionalidades mencionadas anteriormente.

## Pruebas Exploratorias 

A continuación, encontrara el inventario de pruebas exploratorias que fueron realizadas por el equipo y que contiene todo el detalle de las diferentes pruebas realizadas, como lo es la funcionalidad, el soporte visual de cada una y el enlace correspondiente al reporte de incidencias.

[inventario-pruebas-exploratorias-final.xlsx](https://github.com/haibergalindouniandes/automated-software-testing/files/10147760/inventario-pruebas-exploratorias-final.xlsx)


## Proyectos 
### Cypress_MonkeyTest_Ghost_v_5_22
Este proyecto permite realizar pruebas aleatorias como parte de las pruebas de reconocimiento, a la aplicación Ghost, haciendo uso del API de Automatización Cypress (https://www.cypress.io/), mediante la generación aleatoria de eventos y entradas sobre la interfaz gráfica.
El oráculo en este caso es implícito, porque lo que se buscaba era detectar de forma automática comportamientos no deseados desde un punto de vista general.

> Toda la información de la estructura de carpetas, instalación y configuración, ejecución, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Cypress_MonkeyTest_Ghost_v_5_22/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Cypress_MonkeyTest_Ghost_v_5_22#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Cypress_MonkeyTest_Ghost_v_5_22).

### RIPuppet_SST_Ghost_v_5_22
Este proyecto permite realizar pruebas de exploración sistematica de interfaz gráfica o GUI haciendo uso del API RIPuppet (https://misovirtual.virtual.uniandes.edu.co/codelabs/web-gui-ripper), el cual a través de una heurística predefinida realiza la exploración de la aplicación bajo pruebas de forma automatizada.

> Toda la información de la estructura de carpetas, instalación y configuración, ejecución, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./RIPuppet_SST_Ghost_v_5_22/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/RIPuppet_SST_Ghost_v_5_22#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-RIPuppet_SST_Ghost_v_5_22).


### Kraken_E2E_Ghost_v_5_22
Este proyecto cuenta con una suite de pruebas principal que contempla 20 escenarios de pruebas automatizadas, haciendo uso del API de automatización Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/).
La versión de la aplicación Ghost a probar es la 5.22.

> Toda la información de las diferentes funcionalidades y escenarios, estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Kraken_E2E_Ghost_v_5_22/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Kraken_E2E_Ghost_v_5_22#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Kraken_E2E_Ghost_v_5_22).

### Kraken_E2E_Ghost_v_3_42
Este proyecto cuenta con una suite de pruebas principal que contempla 5 escenarios de pruebas automatizadas, haciendo uso del API de automatización Kraken (https://thesoftwaredesignlab.github.io/KrakenMobile/).
La versión de la aplicación Ghost a probar es la 3.42.

> Toda la información de las diferentes funcionalidades y escenarios, estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Kraken_E2E_Ghost_v_3_42/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Kraken_E2E_Ghost_v_3_42#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Kraken_E2E_Ghost_v_3_42).

### Cypress_E2E_Ghost_v_5_22
Este proyecto cuenta con una suite de pruebas principal que contempla 20 escenarios de pruebas automatizadas, haciendo uso del API de automatización Cypress (https://www.cypress.io/).
La versión de la aplicación Ghost a probar es la 5.22.

> Toda la información de las diferentes funcionalidades y escenarios, estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Cypress_E2E_Ghost_v_5_22/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Cypress_E2E_Ghost_v_5_22#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Cypress_E2E_Ghost_v_5_22).

### Cypress_E2E_Ghost_v_3_42
Este proyecto cuenta con una suite de pruebas principal que contempla 5 escenarios de pruebas automatizadas, haciendo uso del API de automatización Cypress (https://www.cypress.io/).
La versión de la aplicación Ghost a probar es la 3.42.

> Toda la información de las diferentes funcionalidades y escenarios, estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Cypress_E2E_Ghost_v_3_42/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Cypress_E2E_Ghost_v_3_42#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Cypress_E2E_Ghost_v_3_42).

### Cypress_E2E_DataGenStra_Ghost_v_5_22
Este proyecto cuenta con una suite de pruebas principal que contempla 8 escenarios de pruebas automatizadas, haciendo uso del API de automatización Cypress (https://www.cypress.io/). Para cada escenario se realizan diferentes casos de prueba aplicando estrategias de generación de datos.
La versión de la aplicación Ghost a probar es la 5.22.

#### Estrategias de generación de datos
- **Pool de datos a-priori:** el proyecto cuenta con un archivo llamado `index.js` que le permitirá generar los archivos `Accounts.json`, `schemaCreatePage.json` y `Pages.json`, los cuales contienen datos aleatorios y que serán utilizados para la realización de las pruebas. Estos archivos seran geneados en la carpeta `./cypress/fixtures/`.
- **Pool de datos (pseudo) aleatorio dinámico:** para esta estrategia se hará uso del API de generación de datos aleatorios Mockaroo (https://mockaroo.com/), y se lanzará cada vez que se ejecute un escenario de prueba.
- **Escenario aleatorio:** para la generación de datos online se hará uso de la librería Faker (https://fakerjs.dev/) que permitirá ir generando datos aleatorios a medida que sean solicitados.

> Toda la información de las diferentes funcionalidades y escenarios, estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./Cypress_E2E_DataGenStra_Ghost_v_5_22/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/Cypress_E2E_DataGenStra_Ghost_v_5_22#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-Cypress_E2E_DataGenStra_Ghost_v_5_22).

### VRT_ResembleJS
Este proyecto permite realizar pruebas de regresión visual, la cual consiste en hacer la comparativa de diferentes imágenes y evidenciar las discrepancias entre ambas. El API que permite realizar esta comparación es ResembleJS (https://rsmbl.github.io/Resemble.js/).

> Toda la información de la estructura de carpetas, instalación y configuración, ejecución, ventajas y desventajas del uso de la herramienta, entre otras, son detalladas en el archivo `README.md` que se encuentra en raíz del proyecto.
[./VRT_ResembleJS/README.md](https://github.com/haibergalindouniandes/automated-software-testing/tree/master/VRT_ResembleJS#readme) o también en la [wiki general del proyecto](https://github.com/haibergalindouniandes/automated-software-testing/wiki/Proyecto-VRT_ResembleJS).


#### Versiones de Ghost utilizadas para las pruebas de regresión visual
| Versiones de Ghost | 
| ----- |
|3.42|
|5.22|

***

# Soportes De La Entrega Final

Todos los soportes documentales y audiovisuales correspondientes al proyecto de Automatización de pruebas de software, orientados a realizar la validación y verificación de la aplicación bajo pruebas Ghost, se encuentran relacionados en la siguiente wiki.
<br>[Soportes Entrega Final]( https://github.com/haibergalindouniandes/automated-software-testing/wiki/Soportes-Entrega-Final)
