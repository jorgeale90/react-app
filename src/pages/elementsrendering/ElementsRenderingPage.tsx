import React from 'react';

import { RModalImages } from "react-modal-images";
import Image33 from "../../assets/images/code/33.png";
import Image34 from "../../assets/images/code/34.png";
import Image35 from "../../assets/images/code/35.png";
import Image36 from "../../assets/images/code/36.png";
import Image37 from "../../assets/images/code/37.png";
import Image38 from "../../assets/images/code/38.png";
import Image39 from "../../assets/images/code/39.png";

type Props = {};

const ElementsRenderingPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Renderizado de elementos:</h3>
        <p>Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves.</p>

        <p>Recorriendo los elementos de un <strong>array</strong> y usando la función <strong>map()</strong> de Javascript.</p>

        <p>Por ejemplo:</p>

        <RModalImages className="image-element"
                      small={Image33}
                      medium={Image33}
                      large={Image33}
                      alt={"Renderizado elementos en React."}
        />

        <p>Incluimos el <strong>array</strong> listaElementos dentro de un elemento <strong>ul</strong>, y lo renderizamos en el DOM:</p>

        <RModalImages className="image-element"
                      small={Image34}
                      medium={Image34}
                      large={Image34}
                      alt={"Renderizado elementos en React."}
        />

        <p>Refactorizamos el ejemplo anterior en un componente que acepte un <strong>array</strong> de números e imprima una lista de elementos.</p>

        <RModalImages className="image-element"
                      small={Image35}
                      medium={Image35}
                      large={Image35}
                      alt={"Renderizado elementos en React."}
        />

        <p>Al ejecutar este código, serás advertido que una <strong>key</strong> debería ser proporcionada para elementos de lista.</p>

        <p>Una “<strong>key</strong>” es un atributo especial de tipo <strong>string</strong> que debes incluir al crear listas de elementos.</p>

        <p>Las <strong>keys</strong> ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados.
            Las <strong>keys</strong> deben ser dadas a los elementos dentro del <strong>array</strong> para darle una identidad estable.</p>

        <p>La mejor forma de elegir una <strong>key</strong> es usando un string que identifique únicamente a un elemento de la lista
            entre sus hermanos. Habitualmente vas a usar los IDs de tus datos como <strong>key</strong>.</p>

        <p>Cuando no tengas IDs estables para renderizar, puedes usar como <strong>key</strong> el índice de los elementos del <strong>array</strong>
            &nbsp;de datos como último recurso.</p>

        <p>Las <strong>keys</strong> usadas dentro de <strong>arrays</strong> deberían ser únicas entre sus hermanos. Sin embargo, no necesitan
            ser únicas globalmente. Podemos usar las mismas <strong>keys</strong> cuando creamos dos o más <strong>arrays</strong> diferentes.</p>

        <p>Entonces refactorizando nuestro código anterior quedaría así:</p>

        <RModalImages className="image-element"
                      small={Image36}
                      medium={Image36}
                      large={Image36}
                      alt={"Renderizado elementos en React."}
        />

        <p>Veamos otro ejemplo:</p>

        <RModalImages className="image-element"
                      small={Image37}
                      medium={Image37}
                      large={Image37}
                      alt={"Renderizado elementos en React."}
        />

        <p>Si corremos este código, veremos que funciona correctamente.</p>

        <p>Pero veremos un warning en la consola:</p>

        <code>"Warning: Each child in a list should have a unique "key" prop."</code>

        <p>Esto es debido a que necesitamos proporcionar el <strong>prop key</strong> en los elementos de la lista, en este caso,
            los <strong>li</strong>.</p>

        <RModalImages className="image-element"
                      small={Image38}
                      medium={Image38}
                      large={Image38}
                      alt={"Renderizado elementos en React."}
        />

        <p>Las <strong>keys</strong> existen para indicarle a React qué elementos han cambiado, han sido
            agregados o han sido removidos.</p>

        <p>También puedes asignar el resultado de un <strong>map</strong> a una variable y luego usar esa variable para
            renderizar el contenido:</p>

        <RModalImages className="image-element"
                      small={Image39}
                      medium={Image39}
                      large={Image39}
                      alt={"Renderizado elementos en React."}
        />

        <p>Recordemos que jsx nos permite usar expresiones de javascript.</p>

        <p><strong>Tips:</strong></p>
        <ul>
            <li>Cuando hagas listas de elementos (independientemente de que los elementos sean <strong>li</strong>, <strong>p</strong>, <strong>h1</strong>, componentes, etc;)
                siempre proporciona el <strong>prop key</strong>.</li>
            <li>Los valores de las <strong>keys</strong> deben ser únicos entre hermanos.</li>
            <li>Si los datos que estas listando provienen de una api, por lo común tendrán una propiedad de <strong>id</strong>, ese lo
            puedes usar como valor de <strong>key</strong>.</li>
        </ul>
    </div>
  );
};

export default ElementsRenderingPage;