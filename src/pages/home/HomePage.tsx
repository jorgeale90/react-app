import React from 'react';

import "./../../styles/style.css";

type Props = {};

const HomePage = (props: Props) => {
  return (
      <div className="content">
          <h3>Introducción a React:</h3>
          <p>React es una biblioteca JavaScript altamente eficiente y declarativa que se utiliza para crear interfaces
              de usuario interactivas.</p>

          <p>Fue creado por el ingeniero de Facebook Jordan Walke y se lanzó en mayo de 2013.</p>

          <p>En los últimos años, ha superado a sus rivales y ha establecido firmemente su dominio.</p>

          <p>React te insita a crear código declarativo (indicas el qué, no el cómo) y orientado a componentes.</p>

          <p>Un componente es un pieza de código que puede representar una parte de la interfaz de usuario o una
              funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o
              incluso en diferentes aplicaciones.</p>

          <p>Cada componente reaccionará a cambios internos (en su estado) o externos (nuevas propiedades recibidas)
              y se volvera a redibujar (renderizado) en la interfaz. Para ello React utiliza su <strong>Virtual DOM</strong> que es una
              copia del <strong>DOM</strong> original del navegador para sólo hacer los cambios necesarios en los nodos que hayan
              reaccionado y evitar redibujar todo el árbol del <strong>DOM</strong>.</p>

          <p>Para poder interactuar con la interfaz React tiene eventos sintéticos que son una abstracción de
              los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerías
              para <strong>crossbrowsing</strong>.</p>

          <h3>Ventajas:</h3>
          <p>Alto rendimiento: React es conocido por su alta eficiencia y flexibilidad. Se puede integrar fácilmente
              con diferentes tecnologías. Se puede usar tanto para el lado del cliente como para el lado del servidor.</p>

          <p>Recursos abundantes : como Facebook la mantiene, existe una gran cantidad de documentación y recursos
              disponibles en la web que hace que la curva de aprendizaje sea muy fluida.</p>

          <p>Compatibilidad con versiones anteriores : la transición o migración de versiones anteriores a nuevas es
              bastante fácil y retrocompatible.</p>

          <p>Estructura de componentes fácil de mantener: la arquitectura basada en componentes de React ayuda a
              aumentar la reutilización del código y facilita bastante el mantenimiento de proyectos a gran escala.</p>

          <p>Fuerte Comunidad: React tiene más de 1300 colaboradores en GitHub.</p>

          <p>Documentación Multi idioma: Actualmente React tiene su documentación en diferentes idiomas
              entre ellos el español.</p>

          <p>Flujo de datos unidireccional: el enlace de datos unidireccional y hacia abajo (de componentes
              padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo
              no afecten la estructura del componente padre.</p>

          <h3>Desventajas:</h3>
          <p>Complejo: muchos desarrolladores pueden encontrar en un inicio demasiado compleja la curva de aprendizaje
              de React en comparación con otros frameworks como el caso de Vue. Dicha complejidad puede ser innecesaria
              para proyectos a pequeña escala.</p>

          <p>JSX: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extensión de
              sintaxis XML a JavaScript. Aunque JSX ayuda a codificar el código React de una manera más segura y
              rápida, puede ser difícil de comprender para los nuevos desarrolladores.</p>

          <p>Necesidad de un ecosistema de muchas herramientas: React requiere una amplia gama de herramientas para
              funcionar correctamente y ser compatible con otras tecnologías.</p>

          <p>Problemas de SEO: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a
              problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.</p>

          <h3>Entorno y Herramientas de Desarrollo:</h3>
          <p><a href="https://nodejs.org/en/" target="_blank">Node.js y NPM</a>: Para ejecutar el entorno de
              desarrollo e instalar dependencias.</p>

          <p><a href="https://yarnpkg.com/" target="_blank">Yarn</a>: Un gestor de paquetes JavaScript.</p>

          <p><a href="https://webpack.js.org/" target="_blank">Webpack</a>: Es un empaquetador de archivos para
              aplicaciones JavaScript.</p>

          <p><a href="https://reactrouter.com/en/main" target="_blank">React Router</a>: Librería para manejar
              rutas declarativas.</p>

          <p><a href="https://es.redux.js.org/" target="_blank">Redux</a>: Es una librería para gestionar el
              estado de las aplicaciones JavaScript.</p>

          <p><a href="https://facebook.github.io/flux/" target="_blank">Flux</a>: Es la arquitectura de aplicaciones
              que Facebook usa para crear aplicaciones web del lado del cliente.</p>

          <p><a href="https://create-react-app.dev/" target="_blank">Create React App</a>: Un conjunto de
              configuraciones preestablecidadas para comenzar a trabajar con React ejecutando un sólo comando.</p>

          <p><a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a>: Es un framework basado en React para
              desarrollar rápidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS,
              Markdowns, APIs, etc.</p>

          <p><a href="https://nextjs.org/" target="_blank">Next.js</a>: Es un framework basado en React para
              desarrollar sitios estáticos y aplicaciones del lado del servidor (SSR - Server Side Rendering).</p>

          <p><a href="https://graphql.org/" target="_blank">GraphQL</a>: Es un lenguaje de consulta de datos para APIs.</p>

          <p><a href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</a>: Es la versión del
              popular framework frontend Bootstrap pero creado con componentes hechos en React.</p>

          <p><a href="https://material-ui.com/es/" target="_blank">Material UI</a>: Es un framework frontend
              inspirado en Material Design creado con componentes hechos en React.</p>

          <p><a href="https://reactnative.dev/" target="_blank">React Native</a>: Es un framework basado en React
              para la creación de aplicaciones móviles y nativas.</p>

          <p><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es" target="_blank">React Dev Tools Chrome</a>:
              Es una extensión para Chrome que agrega de herramientas de depuración para React.</p>

          <p><a href="https://addons.mozilla.org/es/firefox/addon/react-devtools/" target="_blank">React Dev Tools
              Firefox</a>: Es una extensión para Firefox que agrega de herramientas de depuración para React.</p>

          <p><a href="https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets"
                target="_blank">Simple React Snippets for VSCode</a>: Es una extensión para Visual Studio Code que
              nos permite usar atajos para agilizar la escritura de código React.</p>
      </div>
  );
};

export default HomePage;