import React from 'react';

import { RModalImages } from "react-modal-images";
import Image57 from "../../assets/images/code/57.png";
import Image58 from "../../assets/images/code/58.png";
import Image59 from "../../assets/images/code/59.png";
import Image60 from "../../assets/images/code/60.png";

type Props = {};

const FormsMultipleInputPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Formularios con múltiples <strong>inputs</strong>:</h3>
        <p>Para un formulario que contiene múltiples <strong>inputs</strong>, podemos hacer lo siguiente:</p>

        <RModalImages className="image-element"
                      small={Image57}
                      medium={Image57}
                      large={Image57}
                      alt={"Formilario Múltiple en React."}
        />

        <p>La clave aquí es el <strong>handleChange</strong>. Lo que hacemos es dinámicamente cambiar el contenido de <strong>state</strong>.</p>

        <p>Considera:</p>

        <RModalImages className="image-element"
                      small={Image58}
                      medium={Image58}
                      large={Image58}
                      alt={"Formilario Múltiple en React."}
        />

        <p>Esta sintaxis es propia de javascript.</p>

        <p><strong>e.target.name</strong> va a ser igual al valor name que tenga el <strong>input</strong>, lo que equivale a:</p>

        <RModalImages className="image-element"
                      small={Image59}
                      medium={Image59}
                      large={Image59}
                      alt={"Formilario Múltiple en React."}
        />

        <p>Suponiendo que haya sido el <strong>input address</strong> el que haya sido modificado. Los corchetes es una manera de
            indicar la propiedad del objeto.</p>

        <RModalImages className="image-element"
                      small={Image60}
                      medium={Image60}
                      large={Image60}
                      alt={"Formilario Múltiple en React."}
        />

        <p>Estos dos ejemplos son equivalentes e igualmente válidos.</p>

        <p>Entonces, cuando otro <strong>input</strong> sea cambiado, <strong>e.target.name</strong> tendra el nombre del <strong>input</strong> que hizo el cambio.
            De esta manera estamos actualizando el estado de manera dinámica.</p>

        <p><strong>Tips:</strong></p>
        <ul>
            <li>Saca provecho de las propiedades <strong>name</strong> y value del objeto <strong>e.target</strong> para actualizar el
                estado de un formulario de manera dinámica.</li>
            <li>Recuerda que hay eventos (<strong>onChange</strong>, <strong>onSubmit</strong>, etc) y manejadores de eventos que son
                funciones donde nosotros colocamos la lógica de lo que queremos hacer con el formulario.</li>
        </ul>

        <p>En la parte de React <strong>hooks</strong> vamos a ver este mismo ejemplo pero usando los <strong>hooks</strong> de react.</p>
    </div>
  );
};

export default FormsMultipleInputPage;