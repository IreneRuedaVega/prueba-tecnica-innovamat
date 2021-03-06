# Innovamat Junior FrontEnd Developer 

## Prueba técnica para el puesto de **Junior Front-end Developer** en **[Innovamat](https://innovamat.com/)**

## **Objetivo**

El objetivo de la prueba técnica era el desarrollo de una aplicación web dónde los alumnos puedan navegar para encontrar los recursos según su categoría. Por ello, disponemos de un menú donde los alumnos podrán navegar entre secciones. Además, existían dos objetivos más, que el alumno pudiera acceder desde la página de inicio a la página de detalle de los recursos y que los alumnos pudieran marcar como favorito los recursos que deseen, quedando marcados los recursos favoritos mientras se navega entre categorías. Por último, se debían de enseñar toda la lista de recursos favoritos que han sido seleccionados por el alumno en la sección activa donde se encuentre. 

## Stack tecnológico

| React | TypeScript | JSX | API REST |
| -- | -- | -- | -- |

| HTML5 | CSS3 | Sass | 
| -- | -- | -- | 

| Git + GitHub | npm |
| -- | -- |

------------

## **Scripts para arrancar el proyecto**

Clonar el repositorio

### `npm install`

Antes de inicializar la aplicación: instala las dependencias mediante este comando.

### `npm start`

Arranca la aplicación en modo desarrollo.
Abre `http://localhost:3000` para visualizarla en el navegador.

La página se actualizará automáticamente con cada cambio que ocurra en el código.
Igualmente, se mostrarán los errores y los warning del lint en la consola.

## Estructura del proyecto

<details>
<summary>Desplegar para ver la estructura del proyecto</summary>

```
src
 |
 ├─ components
 |  ├─ MainPage.tsx _____________ Componente principal que gestiona las rutas de la web
 |  ├─ Header.tsx _____________ Menú Desktop
 |  ├─ MenuMobile.tsx _____________ Menú Mobile
 |  ├─ Workshops.tsx _____________ Componente que gestiona los datos de Talleres
 |  ├─ Corners.tsx _____________ Componente que gestiona los datos de Rincones
 |  ├─ ContentSection.tsx ___ Componente que gestiona las secciones y los recursos favoritos.
 |  ├─ ContentItem.tsx _____________ Componente que pinta las tarjetas de los recursos.
 |  ├─ DetailResource.tsx _______ Componente que gestiona el detalle de los recursos.  
 |  ├─ NavLink.tsx 
 |  ├─ SimpleImage.tsx  
 |  ├─ Video.tsx 
 |  ├─ IconButton.tsx 
 |  ├─ Container.tsx 
 |  └─ Loading.tsx 
 |
 ├─ data
 |  ├─ getDataFromApiCorners.tsx _____ Gestión de llamada a la API de Rincones
 |  ├─ getDataFromApiWorkshops.tsx _____ Gestión de llamada a la API de Talleres
 |  └─ getDataResources.tsx _____ Gestión de llamada a la API de Detalle de recurso
 |
 ├─ stylesheets
 |  ├─ components
 |  |  ├─ contentItem.scss 
 |  |  └─ loading.scss 
 |  ├─ core
 |  |  ├─ reset.scss ______ Reset de ciertos parámetros para reducir la inconsistencia entre navegadores
 |  |  ├─ mixins.scss ______ Mixins personalizadas
 |  |  └─ variables.scss __ Centralización de parámetros usados en los estilos
 |  ├─ layout
 |  |  ├─container.scss
 |  |  ├─header.scss
 |  |  ├─index.scss
 |  |  └─ menuMobile.scss
 |  └─ page
 |     ├─ contentSection.scss
 |     └─ detailResource.scss
 |  
 ├─ svg
 |  └─ ...
 ├─ types
 |  └─ ...
 └─ index.scss
```
</details>

## Desarrollo

<details>
<summary>Desplegar para ver algunas notas sobre el desarrollo</summary>

.

- Esta web ha sido desarrollada con: HTML5, CSS3, SASS y REACT.
- Se han usado mediaqueries para hacer la web responsive (diseño adaptable a los distintos dispositos).
- Para los estilos se ha utilizado el preprocesador SASS y CSS3.
- Para el control de versiones del proyecto se ha utilizado Git.
- Para la realización de los commits se ha utilizado la metodología de convencional commits (https://www.conventionalcommits.org/en/v1.0.0/).
- Además se han utilizado la librería: react-router-dom. Para la navegación entre secciones y el enrutamiento de la página de inicio a la página de detalle del recurso.


A través de una metodología Kanban en papel se ha ido realizando el desarrollo de esta web. Los pasos seguidos han sido:

- 1º: Identificar en el diseño los distintos componentes y asignarles un nombre y como gestionar el flujo de las distintas funcionalidades. Pensar estratégicamente como hacer que la página sea responsive, teniendo en cuenta el diseño mobile y desktop del diseño.
- 2º: Hacer llamadas a la API para obtener los datos con los cuales hacer realidad las funcionalidades y pintar los elementos. Por ello, se ha creado la carpeta data, con las distintas llamadas.
- 3º: Maquetación. Maquetación de la página de inicio, con sus dos secciones Talleres y Rincones. Después maquetación del detalle del recurso y finalmente la maquetación del header (menú desktop).
- 4º: Enrutamiento a través de react-router-dom, del menú de la página de inicio y a su vez el enrutamiento a la página de detalle de recurso.
- 5º: Desarrollo de la funcionalidad de favoritos. Al darle al botón de "Ver favoritos" podemos visualizar los favoritos en una lista. Esta funcionalidad podemos ver su desarrollo en ContentSection, ya que funciona para ambas secciones (Talleres y Rincones) de la misma manera. Almacenamiento en local: he almacenado los listados de favoritos en localStorage. De esta forma, al recargar la página los recursos seleccionados por los alumnos como favoritos seguirán apareciendo como favoritos y estarán nuevamente en la lista de favoritos por categoría desplegada al darle al botón "Ver favoritos". He almacenado todo el objeto debido a que no se tenía la posibilidad de tener una id única, ya que algunos recursos compartían id.
- 6º: Realización de la versión mobile de la página de inicio y la página del detalle del recurso.
- 7º: Planteamiento de acciones futuras para seguir mejorando la página y sus funcionalidades.
.

</details>

## **Improvements**

<details>
<summary>Desplegar para ver mejoras sugeridas para desarrollar a futuro en siguientes versiones</summary>

- Realizar un slider para que si la lista de recursos es mayor de 5, los alumnos puedan ver los recursos en una sola fila.

- Implementar la funcionalidad de ordenar los recursos alfabéticamente.

- Realizar test con Jest.

</details>

### Hecho por:

Irene Rueda Vega
