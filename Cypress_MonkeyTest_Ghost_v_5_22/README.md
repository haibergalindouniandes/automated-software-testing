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

![estructura](https://user-images.githubusercontent.com/111403006/205466823-1ce2a13a-b4c5-4796-8e57-a2bd64641dee.png)


**cypress:** Carpeta contenedora de las funcionalidades de Cypress.
-	**integration:** Carpeta que contiene el test de la prueba aleatoria `ghost_monkey_testing.cy.js`
-	**videos**: Carpeta que contiene el video generado por la ejecución de la prueba.


## Instalación y configuración
Para correr la prueba aleatoria de la aplicación Ghost, se deben seguir los siguientes pasos:
- Obtenga el código fuente del repositorio: haga clic en Descargar como Zip y descomprima la carpeta en su máquina o clone el repositorio en su ambiente local.
- Instalar los módulos requeridos: Usando Node Package Manager (https://www.npmjs.com/), run `npm install` en la carpeta raíz; esto instalara los módulos de Cypress CLI y otras dependencias necesarias para el correcto funcionamiento del proyecto, como lo es el módulo de faker (https://www.npmjs.com/package/faker). En caso de que ya tenga instalado Cypress, es mejor evitar instalarlo nuevamente en esta carpeta; puede realizar la instalación de dependencias de forma independiente, para esto ejecute el comando: `npm install faker`.
- Configure las propiedades de la aplicación: En el archivo de la prueba aleatoria `ghost_monkey_testing.cy.js`, se deben modificar los siguientes parámetros: 

![config](https://user-images.githubusercontent.com/111403006/205467042-d7b7b8c7-72ef-4958-b094-686864a0ac3c.png)
<br>* Modifique el puerto en la linea 6, de acuerdo al puerto que Ghost está usando en su máquina.
<br>* Modifique el email y el password en la linea 9 y 10 respectivamente, de acuerdo a los valores que estableció para crear su cuenta de Ghost.
<br>* Numero de eventos a ejecutar. Este parametro es opcional. Si se quiere tener un numero diferente de eventos a ejecutar, modifique el parametro de la funcion `randomEvent` en la linea 14 

## Ejecución
- para lanzar la ejecución de la prueba ejecute el siguiente comando:
`cypress run`

## Resultados
Cuando finalice la ejecución de la prueba, se generará en la carpeta `videos` un video de la ejecución de la prueba.


