import React from 'react';

import {RModalImages} from "react-modal-images";
import Image15 from "../../assets/images/code/15.png";
import Image16 from "../../assets/images/code/16.png";
import Image17 from "../../assets/images/code/17.png";
import Image18 from "../../assets/images/code/18.png";
import Image19 from "../../assets/images/code/19.png";

type Props = {};

const ComponentsPage = (props: Props) => {
  return (
      <div className="content">
          <h3>Componentes:</h3>
          <p>En React se introduce el concepto de componentes para crear la interfaz gráfica de nuestra aplicación.</p>

          <p>Permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y
              reutilizables que estarán aisladas una de otras.</p>

          <p>El objetivo es que cada componente sea independiente y encapsule su marcado, estilos y estado. De esa
              forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.</p>

          <p>Se le pueden pasar datos a un componente a través de algo llamado <strong>props</strong> y devuelven a React elementos
              que describen lo que debe verse en pantalla.</p>

          <p>En React los datos fluyen de forma unidireccional, de componentes padres a componentes hijos.</p>

          <p>React te permite definir componentes como clases o como funciones.</p>

          <h3>Tipos de Componentes</h3>

          <p>Como una clase que extiende de Component con un método render:</p>

          <RModalImages className="image-element"
                        small={Image15}
                        medium={Image15}
                        large={Image15}
                        alt={"Componentes en React."}
          />

          <p>O como una función que retorna lo que se va a renderizar:</p>

          <RModalImages className="image-element"
                        small={Image16}
                        medium={Image16}
                        large={Image16}
                        alt={"Componentes en React."}
          />

          <p>Una analogía de los componentes son las piezas de lego. Una pieza de lego es independiente,
              reusable y tiene su propia estructura (forma y color).</p>

          <p>Un componente puede estar constituido por una o más unidades llamadas elementos. Por ejemplo,
              el <strong>div</strong>, <strong>img</strong>, <strong>span</strong>, <strong>p</strong>, <strong>h1</strong>, todos estos son elementos.</p>

          <p>Y con jsx, podemos usar tanto elementos como componentes definidos por nosotros.</p>

          <RModalImages className="image-element"
                        small={Image17}
                        medium={Image17}
                        large={Image17}
                        alt={"Componentes en React."}
          />

          <p>Más adelante profundizaremos en la composición de componentes, es decir, la manera en que podemos
              usar los componentes para formar otros componentes en el mismo sentido que podemos usar piezas de
              lego para formar otras piezas más grandes.</p>

          <p><strong>Tips</strong>:</p>
          <ul>
          <li>Define tus componentes siempre con letra mayúscula, esto le indica a React que es un componente y no
              un elemento html como un <strong>div</strong>, <strong>img</strong>, etc. Ejemplo: React va a tratar a <strong>div</strong> como un elemento html mientras
              que <strong>Title</strong> como un componente.</li>
          </ul>

          <p>Por último, los dos tipos irreductibles de componentes básicos de React son:</p>
          <ul>
              <li>Componentes funcionales. Definidos por medio de una función de javascript.</li>
              <li>Componentes clase. Definidos por medio de clases de ES6.</li>
          </ul>

          <p>A partir de estos dos tipos de componentes, existen más categorías que veremos en la parte de
              Tipos de componentes.</p>

          <RModalImages className="image-element"
                        small={Image18}
                        medium={Image18}
                        large={Image18}
                        alt={"Componentes en React."}
          />

          <p>Ambos ejemplos anteriores son equivalentes a la hora de definir un componente. Vamos a
              profundizar más en el componente de tipo clase en la parte de estado y ciclos de vida.</p>

          <h3>Renderizar componentes</h3>

          <p>La manera de renderizar un componente en una aplicación es por medio de una utilidad llamada ReactDOM.</p>

          <RModalImages className="image-element"
                        small={Image19}
                        medium={Image19}
                        large={Image19}
                        alt={"Componentes en React."}
          />

          <p>render acepta dos parámetros: un componente y el lugar del <strong>DOM</strong> donde queremos que se monte.</p>

          <p><strong>Tips:</strong></p>
          <ul>
              <li>Comúnmente se usa el <strong>div</strong> con id igual a <strong>root</strong> y es lo recomendado.</li>
              <li>Si estás creando una app de React desde cero, define un solo render para tu app.</li>
              <li>Si estás integrando React a una app existente, es válido y común que existan varios render con diferentes&nbsp;
              <strong>divs</strong> e <strong>ids</strong>.</li>
          </ul>
      </div>
  );
};

export default ComponentsPage;