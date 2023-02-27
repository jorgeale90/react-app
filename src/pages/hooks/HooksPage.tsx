import React from 'react';

import { RModalImages } from "react-modal-images";
import Image45 from "../../assets/images/code/45.png";
import Image46 from "../../assets/images/code/46.png";
import Image47 from "../../assets/images/code/47.png";
import Image48 from "../../assets/images/code/48.png";
import Image49 from "../../assets/images/code/49.png";
import Image50 from "../../assets/images/code/50.png";
import Image51 from "../../assets/images/code/51.png";
import Image52 from "../../assets/images/code/52.png";
import Image53 from "../../assets/images/code/53.png";

type Props = {};

const HooksPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Hooks:</h3>
        <p>Los <strong>Hooks</strong> son una nueva incorporación a partir de React 16.8.0, que nos permiten "enganchar"
            el estado y el ciclo de vida en componentes basados en funciones.</p>

        <h3>¿Por qué se crearon los <strong>Hooks</strong>?</h3>

        <p>Las clases confunden a las personas y a las máquinas.</p>

        <p>Entender la estructura y reglas que implican crear una clase puede ser una curva de aprendizaje lenta
            y requerir de ciertos conceptos, como el manejo de <strong>this</strong> en JavaScript, por el contrario las
            funciones son muy fáciles de entender y manipular incluso para personas que van comenzando.</p>

        <p>A las máquinas tampoco les gusta las clases ya que no minifican tan bien como las funciones, esto
            significa que nuestro código ocupará más texto y por ende más espacio de almacenamiento.</p>

        <h3>Preguntas frecuentes</h3>
        <ul>
            <li>¿Los <strong>hooks</strong> hacen algo que un Componente de Clase no pueda hacer? <strong>NO</strong>.</li>
            <li>¿Los Componentes de Clase van a desaparecer? <strong>NO</strong>.</li>
            <li>¿Mi conocimiento del estado, las propiedades y los eventos serán obsoleto ahora con hooks? <strong>NO</strong>.</li>
            <li>¿Debo reescribir todas mis aplicaciones React, ahora con hooks? Probablemente <strong>NO</strong>.</li>
            <li>¿Debo implementar hooks en mi próximo proyecto? <strong>Probablemente SÍ</strong>.</li>
        </ul>

        <h3>Tipos de <strong>Hooks</strong>:</h3>
        <ul>
            <li>Básicos (en el 100% de tus proyectos):</li>
            <ul>
                <li><strong>useState</strong>.</li>
                <li><strong>useEffect</strong>.</li>
            </ul>
            <li>Avanzados (tal vez no en todos tus proyectos):</li>
            <ul>
                <li><strong>useContext</strong>.</li>
                <li><strong>useRef</strong>.</li>
                <li><strong>useReducer</strong>.</li>
                <li><strong>useCallback</strong>.</li>
                <li><strong>useMemo</strong>.</li>
            </ul>
        </ul>

        <p>Puedes ver toda la lista de <strong>hooks</strong> disponibles en la <a href="https://reactjs.org/docs/hooks-reference.html" target="_blank">documentación</a> de React.</p>

        <p>En este artículo explicaremos los <strong>hooks</strong>:</p>
        <ul>
            <li><strong>useState</strong>.</li>
            <li><strong>useEffect</strong>.</li>
        </ul>

        <h3>useState</h3>

        <p>Permite manipular el estado de un componente funcional, se comporta como el objeto <strong>state</strong> y a la
            función <strong>this.setState</strong> de los componentes de clase.</p>

        <p>Para usarlo, debemos importarlo desde la librería de React.</p>

        <RModalImages className="image-element"
                      small={Image45}
                      medium={Image45}
                      large={Image45}
                      alt={"Hooks en React."}
        />

        <p>Ahora, en nuestro componente funcional, vamos a inicializar el <strong>hook</strong>, para ello asignaremos
            mediante la destructuración de arreglos 2 elementos:</p>
        <ol>
            <li>El valor del estado.</li>
            <li>Un método para actualizarlo.</li>
        </ol>

        <p>Adicionalmente le pasaremos como parámetro el valor inicial del estado al método <strong>useState</strong>.</p>

        <RModalImages className="image-element"
                      small={Image46}
                      medium={Image46}
                      large={Image46}
                      alt={"Hooks en React."}
        />

        <p>Para actualizar el estado tenemos que utilizar el método resultante de la destructuración de <strong>useState</strong>
            &nbsp;y pasarle el nuevo valor.</p>

        <RModalImages className="image-element"
                      small={Image47}
                      medium={Image47}
                      large={Image47}
                      alt={"Hooks en React."}
        />

        <p>Un detalle del estado en los <strong>Hooks</strong>, es que no debe ser tratado como un objeto como en los componentes de
            clases, si necesitas más de un valor cada uno debe ser almacenado en una variable diferente y usar la
            destructurción de <strong>useState</strong>.</p>

        <RModalImages className="image-element"
                      small={Image48}
                      medium={Image48}
                      large={Image48}
                      alt={"Hooks en React."}
        />

        <h3>useEffect</h3>

        <p>Permite hacer uso del ciclo de vida en un componente funcional. Usar <strong>useEffect</strong> equivale a la
            combinación de los métodos:</p>
        <ul>
            <li><strong>componentDidMount()</strong> (montaje).</li>
            <li><strong>componentDidUpdate()</strong> (actualización).</li>
            <li><strong>componentWillUnmount()</strong> (desmontaje).</li>
        </ul>

        <p><strong>useEffect</strong> recibe como parámetro una función que se ejecutará cada vez que nuestro
            componente se renderice, ya sea por cambios del estado o las propiedades.</p>

        <p>Para usarlo, debemos importarlo desde la librería de React.</p>

        <RModalImages className="image-element"
                      small={Image49}
                      medium={Image49}
                      large={Image49}
                      alt={"Hooks en React."}
        />

        <p>Para añadir un efecto que se ejecutará cada vez que nuestro componente se renderice, se debe
            pasar como parámetro una función al <strong>hook useEffect</strong> misma que se ejecutará al renderizarse el componente.</p>

        <RModalImages className="image-element"
                      small={Image50}
                      medium={Image50}
                      large={Image50}
                      alt={"Hooks en React."}
        />

        <p>Con <strong>useEffect</strong> también podemos suscribirnos y desuscribirnos a eventos, temporizadores,
            servicios, API's, etc.</p>

        <p>Para ello hay que escribir el código de la suscripción en el cuerpo de la función de <strong>useEffect</strong> y
            para evitar problemas de rendimiento o aumento indiscriminado de la memoria y recursos de
            nuestra aplicación retornar en una función el código que desuscriba o cancele lo que se
            ejecuto en el cuerpo de la función.</p>

        <RModalImages className="image-element"
                      small={Image51}
                      medium={Image51}
                      large={Image51}
                      alt={"Hooks en React."}
        />

        <p>Por defecto los efectos se ejecutan cada vez que se realiza un renderizado, si queremos evitar
            actualizaciones innecesarias o indiscriminadas podemos pasarle un segundo parámetro al <strong>hook</strong>.</p>

        <p>El parámetro debe ser un <strong>array</strong> con todos los valores de los que dependerá el efecto, de forma que
            sólo se ejecutará cuando ese valor cambie.</p>

        <RModalImages className="image-element"
                      small={Image52}
                      medium={Image52}
                      large={Image52}
                      alt={"Hooks en React."}
        />

        <p>Si le pasamos un <strong>array</strong> vacío, eso hará que el efecto no dependa de ningún valor, por lo que sólo
            se ejecutará al montarse y desmontarse el componente.</p>

        <RModalImages className="image-element"
                      small={Image53}
                      medium={Image53}
                      large={Image53}
                      alt={"Hooks en React."}
        />
    </div>
  );
};

export default HooksPage;