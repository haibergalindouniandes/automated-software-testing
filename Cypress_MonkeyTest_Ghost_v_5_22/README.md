# Integrantes

| Nombre | email |
| --------- | --------- |
| Haiber Humberto Galindo Sanchez | h.galindos@uniandes.edu.co |
| Jhon Fredy Guzmán Caicedo | Jf.guzmanc1@uniandes.edu.co |
| Jorge Mario Carrillo Riveros | jm.carrillo@uniandes.edu.co |
| Edgar Ariel Salamanca Camargo | ea.salamanca@uniandes.edu.co |

# Pruebas Aleatorias (Monkey testing) 
## Aplicación Ghost (Version 5.22.10)
Este proyecto permite realizar pruebas aleatorias como parte de las pruebas de reconocimiento, a la aplicación Ghost, haciendo uso del API de Automatización Cypress (https://www.cypress.io/), mediante la generación aleatoria de eventos y entradas sobre la interfaz gráfica.
El oráculo en este caso es implícito, porque lo que se buscaba era detectar de forma automática comportamientos no deseados desde un punto de vista general. 

### Funcionalidades 

| Funcionalidades a probar | 
| ----- |
| Members |
| Tags |
| Pages |
| Posts |
| Explore |
| View Site |
| Dashboard |
| Login |


## Estructura de carpetas
La estructura interna de la aplicación a nivel de carpetas y su finalidad es la siguiente:

![estructura_cypress](https://user-images.githubusercontent.com/111403006/202925080-6934f77b-ef1a-4c76-af9b-6cddbe4651e7.png)

**cypress:** Carpeta contenedora de las funcionalidades de Cypress.
-	**integration:** Carpeta que contiene el test de la prueba aleatoria `ghost_monkey_testing.cy.js`
-	**videos**: Carpeta que contiene el video generado por la ejecución de la prueba.


## Instalación y configuración
Para correr la prueba aleatoria de la aplicación Ghost, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Usando Node Package Manager (https://www.npmjs.com/), run `npm install` en la carpeta raíz; esto instalara los módulos de Cypress CLI y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de faker (https://www.npmjs.com/package/faker). En caso de que ya tenga instalado Cypress, es mejor evitar instalarlo nuevamente en esta carpeta; puede realizar la instalación de dependencias de forma independiente, para esto ejecute el comando: `npm install faker`.
- Configure las propiedades de la aplicación: En el archivo de la prueba aleatoria `ghost_monkey_testing.cy.js`, se deben modificar los siguientes parámetros: 
![configuracion](https://user-images.githubusercontent.com/111403006/202923217-749b4cb7-9a46-4934-babe-0a0621aa0309.png)
<br>* Modifique el puerto en la linea 6, de acuerdo al puerto que Ghost está usando en su máquina.
<br>* Modifique el email y le password en la linea 9 y 10 respectivamente, de acuerdo a los valores que estableció para crear su cuenta de Ghost.
<br>* Numero de eventos a ejecutar. Este parametro es opcional. Si se quiere tener un numero diferente de eventos a ejecutar, modifique el parametro de la funcion `randomEvent` en la linea 14 

## Ejecución
- para lanzar la ejecución de la prueba ejecute el siguiente comando:
`cypress run`

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta `videos` un video de la ejecución de la prueba.


