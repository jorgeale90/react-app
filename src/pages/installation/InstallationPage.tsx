import React from 'react';

import { RModalImages } from "react-modal-images";
import Image1 from "../../assets/images/code/1.png";
import Image2 from "../../assets/images/code/2.png";

type Props = {};

const InstallationPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Crear Aplicación React:</h3>
        <p>Aunque existen varias formas de empezar con React, una manera sencilla y eficiente es con&nbsp;
            <a href="https://nextjs.org/" target="_blank">create-react-app</a>, una aplicación de consola que nos va a
            permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más
            importante: Programar en React.</p>

        <p>Para crear una aplicación utilizamos el comando <strong>npx create-react-app</strong> seguido del nombre que le quieras
            dar a tu aplicación. Por ejemplo:</p>

        <RModalImages className="image-element"
                      small={Image1}
                      medium={Image1}
                      large={Image1}
                      alt={"Crear mi primera app en React."}
        />

        <p>Cuando ejecutas ese comando <strong>create-react-app</strong> va a crear una carpeta llama <strong>my-app</strong> con una serie
            de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.</p>

        <p>Ingresa a la carpeta <strong>my-app</strong> y ejecuta el proyecto con los siguientes comandos:</p>

        <RModalImages className="image-element"
                      small={Image2}
                      medium={Image2}
                      large={Image2}
                      alt={"Acceder al proyecto e inicializar."}
        />

        <p>El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.</p>

        <p>¡Felicidades!, has creado tu primera aplicación con React.</p>

        <h3>Scripts:</h3>
        <p>En la carpeta del proyecto puedes ejecutar los siguientes comandos:</p>
        <ul>
        <li><strong>npm start</strong> - inicia el servidor de desarrollo y abre un navegador con la aplicación.</li>
        <li><strong>npm test</strong> - ejecuta las pruebas.</li>
        <li><strong>npm run build</strong> - empaqueta la aplicación para producción en la carpeta <strong>build</strong>.</li>
        <li><strong>npm run eject</strong> - permite cambiar manualmente las librerías y configuración que
            utiliza <strong>create-react-app</strong> por defecto. Ten cuidado con este comando, una vez que se
            expulsa la configuración inicial no hay vuelta atrás.</li>
        </ul>
    </div>
  );
};

export default InstallationPage;