import React from 'react';

import { RModalImages } from "react-modal-images";
import Image40 from "../../assets/images/code/40.png";
import Image41 from "../../assets/images/code/41.png";
import Image42 from "../../assets/images/code/42.png";

type Props = {};

const EventsPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Eventos:</h3>
        <p>Manejar eventos en React es muy similar a manejar eventos en el <strong>DOM</strong>. Sin embargo existen algunas
            diferencias de sintaxis:</p>

        <ul>
            <li>Los eventos de React se nombran usando <strong>camelCase</strong>, en vez de minúsculas.</li>
            <li>Con JSX pasas una función como el manejador del evento, en vez de un <strong>string</strong>.</li>
        </ul>

        <p>Ejemplo, en HTML:</p>

        <RModalImages className="image-element"
                      small={Image40}
                      medium={Image40}
                      large={Image40}
                      alt={"Eventos en React."}
        />

        <p>Ejemplo, en React:</p>

        <RModalImages className="image-element"
                      small={Image41}
                      medium={Image41}
                      large={Image41}
                      alt={"Eventos en React."}
        />

        <p>Otra diferencia es que en React no puedes retornar <strong>false</strong> para prevenir el comportamiento por
            defecto. Debes, explícitamente, llamar <strong>preventDefault</strong>.</p>

        <p>Por ejemplo, en nuestro ejemplo del componente <strong>Welcome</strong> visto en el tema del Estado podemos cambiarlo
            para que cuando hagan click sobre el <strong>h1</strong> cambie el texto. Para eso vamos a definir un método&nbsp;
            <strong>updateText</strong> que vamos a invocar cuando hagan click sobre el <strong>h1</strong>:</p>

        <RModalImages className="image-element"
                      small={Image42}
                      medium={Image42}
                      large={Image42}
                      alt={"Eventos en React."}
        />
    </div>
  );
};

export default EventsPage;