import React from 'react';

import {RModalImages} from "react-modal-images";
import Image3 from "../../assets/images/code/3.png";
import Image4 from "../../assets/images/code/4.png";
import Image5 from "../../assets/images/code/5.png";
import Image6 from "../../assets/images/code/6.png";
import Image7 from "../../assets/images/code/7.png";
import Image8 from "../../assets/images/code/8.png";
import Image9 from "../../assets/images/code/9.png";
import Image10 from "../../assets/images/code/10.png";
import Image11 from "../../assets/images/code/11.png";
import Image11_1 from "../../assets/images/code/11_1.png";
import Image11_2 from "../../assets/images/code/11_2.png";
import Image11_3 from "../../assets/images/code/11_3.png";
import Image11_4 from "../../assets/images/code/11_4.png";
import Image11_5 from "../../assets/images/code/11_5.png";
import Image12 from "../../assets/images/code/12.png";
import Image13 from "../../assets/images/code/13.png";
import Image14 from "../../assets/images/code/14.png";

type Props = {};

const JsxPage = (props: Props) => {
  return (
    <div className="content">
      <h3>JSX:</h3>
        <p>Es una extensión de la sintaxis de JavaScript que produce elementos de React.</p>

        <p>Se puede usar:</p>
        <ul>
            <li>Dentro de estructuras de control como if y for.</li>
            <li>Asignarlo a variables.</li>
            <li>Aceptarlo como argumento o retorno en funciones.</li>
            <li>Expresiones JavaScript.</li>
            <li>Veamos un ejemplo tomado del código que genera <strong>create-react-app</strong>:</li>
        </ul>

        <RModalImages className="image-element"
                      small={Image3}
                      medium={Image3}
                      large={Image3}
                      alt={"Jsx."}
        />

        <p>JSX es similar a HTML pero con algunas diferencias importantes:</p>

        <p>Algunas reglas importantes:</p>
        <ul>
            <li>Toda etiqueta debe cerrarse por ejemplo <strong>br</strong> debera cerrarse.</li>
            <li>Los componentes deben devolver un sólo elemento padre.</li>
            <li>Algunos atributos HTML cambian como:</li>
            <ul>
                <li><strong>class</strong> por <strong>className</strong>.</li>
                <li><strong>for</strong> por <strong>htmlFor</strong>.</li>
            </ul>
            <li>Los atributos de un elemento JSX pueden aceptar valores de tipo <strong>String</strong> entrecomillados o expresiones
                JavaScript entre llaves.</li>
        </ul>

        <h3>JSX se transforma en JavaScript:</h3>

        <p>Por debajo JSX se transforma en código JavaScript. Por ejemplo, el siguiente código JSX.</p>

        <RModalImages className="image-element"
                      small={Image4}
                      medium={Image4}
                      large={Image4}
                      alt={"Jsx."}
        />

        <p>se transforma en el siguiente código JavaScript:</p>

        <RModalImages className="image-element"
                      small={Image5}
                      medium={Image5}
                      large={Image5}
                      alt={"Jsx."}
        />

        <p>Puedes utilizar el <a href="https://babeljs.io/repl" target="_blank">REPL de Babel</a> para ver en qué
            se convierte el código JSX que escribes.</p>

        <p>La ventaja de JSX es que, como es JavaScript, podemos:</p>
        <ol>
            <li>Ver algunos errores en tiempo de compilación.</li>

            <li>Asignar JSX a variables. Por ejemplo:</li>

            <RModalImages className="image-element"
                          small={Image6}
                          medium={Image6}
                          large={Image6}
                          alt={"Jsx."}
            />

            <li>Retornar JSX desde métodos. Por ejemplo:</li>

            <RModalImages className="image-element"
                          small={Image7}
                          medium={Image7}
                          large={Image7}
                          alt={"Jsx."}
            />
        </ol>

        <p>Una restricción de JSX es que siempre debes tener un elemento raíz:</p>

        <RModalImages className="image-element"
                      small={Image8}
                      medium={Image8}
                      large={Image8}
                      alt={"Jsx."}
        />

        <h3>Mezclando JSX con JavaScript</h3>

        <p>Para mezclar código JavaScript en JSX utiliza llaves las llaves:</p>

        <RModalImages className="image-element"
                      small={Image9}
                      medium={Image9}
                      large={Image9}
                      alt={"Jsx."}
        />

        <p>Una restricción de JSX es que no puedes utilizar <strong>if</strong>, <strong>else</strong>, <strong>while</strong> o <strong>for</strong>.</p>

        <p>Para agregar condicionales utiliza el operador ternario:</p>

        <RModalImages className="image-element"
                      small={Image10}
                      medium={Image10}
                      large={Image10}
                      alt={"Jsx."}
        />

        <p>Para mostrar elementos de un arreglo o un objeto utiliza <strong>map</strong>:</p>

        <RModalImages className="image-element"
                      small={Image11}
                      medium={Image11}
                      large={Image11}
                      alt={"Jsx."}
        />

        <p>Considera este ejemplo:</p>

        <RModalImages className="image-element"
                      small={Image11_1}
                      medium={Image11_1}
                      large={Image11_1}
                      alt={"Jsx."}
        />

        <h3>Jsx if y else:</h3>

        <p>Podemos usar condicionales dentro de la sintaxis Jsx.</p>

        <RModalImages className="image-element"
                      small={Image11_2}
                      medium={Image11_2}
                      large={Image11_2}
                      alt={"Jsx."}
        />

        <p>En este ejemplo, estamos pasando por parámetro la variable <strong>name</strong> y en la condición
            mostramos un mensaje u otro según si <strong>name</strong> tiene valor o no.</p>

        <p>Más adelante vamos a ver diferentes maneras de renderizado condicional.</p>

        <h3>Jsx y atributos:</h3>

        <p>Ya que usamos Jsx para declarar elementos a mostrar en el navegador, también podemos
            especificar los atributos de dichos elementos.</p>

        <RModalImages className="image-element"
                      small={Image11_3}
                      medium={Image11_3}
                      large={Image11_3}
                      alt={"Jsx."}
        />

        <p>Como puedes ver, nos resulta muy familiar la sintaxis de Jsx pero recuerda que Jsx es javascript
            puro, no html, es por ello que he colocado el equivalente transpilado.</p>

        <p>Otros ejemplos:</p>

        <RModalImages className="image-element"
                      small={Image11_4}
                      medium={Image11_4}
                      large={Image11_4}
                      alt={"Jsx."}
        />

        <p>Tips:</p>
        <ul>
            <li>Usa comillas para valores que son una cadena.</li>
            <li>Usa llaves para valores diferentes a una cadena como un número, una función, propiedad de un objeto, etc.</li>
        </ul>

        <h3>Jsx y childrens o hijos:</h3>

        <p>Podemos anidar tantos elementos como deseemos con jsx.</p>

        <RModalImages className="image-element"
                      small={Image11_5}
                      medium={Image11_5}
                      large={Image11_5}
                      alt={"Jsx."}
        />

        <p>En este ejemplo estamos colocando elementos <strong>h1</strong> y <strong>h2</strong> de manera normal, pero nota que el img no tiene
            una etiqueta de cierre. Esto es debido a que no es necesario declararla porque no vamos a definir
            ningún valor.</p>

        <p>Esta es una gran diferencia entre html y jsx.</p>

        <h3>Estilos CSS inline en JSX:</h3>

        <p>Es posible definir y utilizar estilos inline en JSX:</p>

        <RModalImages className="image-element"
                      small={Image12}
                      medium={Image12}
                      large={Image12}
                      alt={"Jsx."}
        />

        <h3>Eventos del DOM en JSX:</h3>

        <p>En JSX se utilizan los eventos estándar del <strong>DOM</strong> como <strong>onclick</strong>, <strong>onchange</strong>,
            <strong>onkeydown</strong>, ... pero utilizando <strong>camelCase</strong>: <strong>onClick</strong>, <strong>onChange</strong>, <strong>onKeyDown</strong>, ...</p>

        <RModalImages className="image-element"
                      small={Image13}
                      medium={Image13}
                      large={Image13}
                      alt={"Jsx."}
        />

        <p>Fíjate que utilizamos las llaves para escribir nuestro código JavaScript.</p>

        <p>También podríamos pasar una función que es invocada cuando se genere el evento:</p>

        <RModalImages className="image-element"
                      small={Image14}
                      medium={Image14}
                      large={Image14}
                      alt={"Jsx."}
        />

        <p>Fíjate que no estamos invocando la función saludar, sólo la estamos pasando para que React la
            invoque cuando ocurra el evento.</p>
    </div>
  );
};

export default JsxPage;