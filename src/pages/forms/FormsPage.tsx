import React from 'react';
import { RModalImages } from "react-modal-images";
import Image54 from "../../assets/images/code/54.png";
import Image55 from "../../assets/images/code/55.png";
import Image56 from "../../assets/images/code/56.png";

type Props = {};

const FormsPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Formularios:</h3>
        <p>La manera básica y más común de manejar formularios en React consiste en hacer formularios controlados.</p>

        <p>Un formulario controlado consiste en un formulario cuyos valores y eventos son controlados por React.</p>

        <p>Vamos a ver un ejemplo de un formulario que no está siendo controlado por React y después vamos a
            controlarlo progresivamente.</p>

        <RModalImages className="image-element"
                      small={Image54}
                      medium={Image54}
                      large={Image54}
                      alt={"Formilario en React."}
        />

        <p>Hasta aquí nada nuevo, esto tiene el comportamiento por <strong>default</strong> de un formulario en html.</p>

        <p>Para controlar los valores del formulario, necesitamos usar el estado del componente. En este ejemplo,
            va a ser con un componente de tipo clase.</p>

        <RModalImages className="image-element"
                      small={Image55}
                      medium={Image55}
                      large={Image55}
                      alt={"Formilario en React."}
        />

        <p>Vamos a notar que cuando escribimos en el <strong>input</strong>, no actualiza ningún valor. Incluso en la consola marca <strong>warning</strong>:</p>

        <code>"Failed prop type: You provided a value prop to a form field without an onChange handler.
            This will render a read-only field. If the field should be mutable use defaultValue.
            Otherwise, set either onChange or readOnly."</code>

        <p>Necesitamos agregar un manejador del evento <strong>change</strong> en el <strong>input</strong> para que se actualice el estado.</p>

        <RModalImages className="image-element"
                      small={Image56}
                      medium={Image56}
                      large={Image56}
                      alt={"Formilario en React."}
        />

        <p><strong>onChange</strong> es el manejador del evento change del <strong>input</strong> y cuando el usuario modifique el valor del mismo,
            va a ejecutar el <strong>callback</strong> que en este caso es <strong>this.handleChange</strong>.</p>

        <p>Ya que es un manejador de evento, recibe por valor el objeto <strong>event</strong> que contiene todo lo relativo al evento
            desencadenado. En este caso, el objeto <strong>event</strong> tiene una propiedad <strong>target</strong> que a su vez es un objeto que
            tiene la propiedad <strong>value</strong>.</p>

        <p><strong>e.target.value</strong> es el valor del input que desencadenó el evento.</p>

        <p>Para el evento <strong>submit</strong> usamos <strong>this.handleSubmit</strong>. En este caso ejecutamos <strong>e.preventDefault</strong>, una función
            del objeto <strong>event</strong> para prevenir que se ejecute el comportamiento <strong>default</strong> (recargar la página). Después
            ejecutamos un <strong>alert</strong> con los valores del estado.</p>
    </div>
  );
};

export default FormsPage;