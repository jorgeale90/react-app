import React from 'react';

import { RModalImages } from "react-modal-images";
import Image28 from "../../assets/images/code/28.png";
import Image30 from "../../assets/images/code/30.png";
import Image31 from "../../assets/images/code/31.png";
import Image32 from "../../assets/images/code/32.png";

type Props = {};

const ConditionalRenderingPage = (props: Props) => {
  return (
    <div className="content">
      <h3>Renderizado condicional:</h3>
        <p>En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces,
            puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.</p>

        <p>El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript.
            Puedes usar el condicional <strong>if</strong> o el operador ternario para crear elementos dinámicamente en base al
            valor del estado o las propiedades que recibe el componente.</p>

        <p>Considera estos dos componentes:</p>

        <RModalImages className="image-element"
                      small={Image28}
                      medium={Image28}
                      large={Image28}
                      alt={"Renderizado condicional en React."}
        />

        <RModalImages className="image-element"
                      small={Image30}
                      medium={Image30}
                      large={Image30}
                      alt={"Renderizado condicional en React."}
        />

        <p>Vamos a crear un componente Saludar que muestra cualquiera de estos componentes dependiendo si el
            usuario ha iniciado sesión o no:</p>

        <RModalImages className="image-element"
                      small={Image31}
                      medium={Image31}
                      large={Image31}
                      alt={"Renderizado condicional en React."}
        />

        <p>Con el operador ternario el código quedaría de la siguiente manera:</p>

        <RModalImages className="image-element"
                      small={Image32}
                      medium={Image32}
                      large={Image32}
                      alt={"Renderizado condicional en React."}
        />
    </div>
  );
};

export default ConditionalRenderingPage;