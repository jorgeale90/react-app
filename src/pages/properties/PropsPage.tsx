import React from 'react';

import {RModalImages} from "react-modal-images";
import Image20 from "../../assets/images/code/20.png";
import Image21 from "../../assets/images/code/21.png";
import Image22 from "../../assets/images/code/22.png";
import Image23 from "../../assets/images/code/23.png";
import Image24 from "../../assets/images/code/24.png";

type Props = {};

const PropsPage = (props: Props) => {
  return (
    <div className="content">
      <h3>Propiedades:</h3>
        <p>Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado <strong>props</strong>,
            el cual puede recibir diferentes tipos de datos, como:</p>

        <ul>
            <li>Strings</li>
            <li>Numbers</li>
            <li>Booleans</li>
            <li>Arrays</li>
            <li>Objects</li>
            <li>Functions</li>
            <li>React Elements</li>
            <li>React Components</li>
        </ul>

        <p>Las <strong>props</strong> son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.</p>

        <p>El componente las recibe como atributos que se pasan a través de JSX.</p>

        <p>Por ejemplo, podemos pasar un atributo name al componente <strong>Welcome</strong>:</p>

        <RModalImages className="image-element"
                      small={Image20}
                      medium={Image20}
                      large={Image20}
                      alt={"Propiedades."}
        />

        <p>Si defines el componente en una clase, las <strong>props</strong> se reciben en el constructor de la clase:</p>

        <RModalImages className="image-element"
                      small={Image21}
                      medium={Image21}
                      large={Image21}
                      alt={"Propiedades."}
        />

        <p>Si defines el componente como una función, las <strong>props</strong> se reciben como un parámetro de la función:</p>

        <RModalImages className="image-element"
                      small={Image22}
                      medium={Image22}
                      large={Image22}
                      alt={"Propiedades."}
        />

        <p>El ejemplo más claro es un componente que tenga un mensaje de bienvenida a un usuario.</p>

        <RModalImages className="image-element"
                      small={Image23}
                      medium={Image23}
                      large={Image23}
                      alt={"Propiedades."}
        />

        <p>Si queremos saludar a un usuario con otro nombre, no vamos a crear otro componente. Imagina tener
            1000 usuarios con diferentes nombres, crear 1000 componentes solo para eso no es para nada óptimo.</p>

        <p>Lo que hacemos es crear un solo componente que nos permita pasar por parámetro el valor que deseemos.</p>

        <RModalImages className="image-element"
                      small={Image24}
                      medium={Image24}
                      large={Image24}
                      alt={"Propiedades."}
        />

        <p>Este ejemplo de componente es como una función pura debido a que dado el mismo parámetro, siempre
            obtendremos el mismo resultado.</p>

        <p>Pues bien, <strong>los props es un objeto de javascript que es pasado como un parámetro a un componente</strong> tal y
            como lo hicimos en el ejemplo anterior. Props viene de properties o propiedades.</p>

        <p>Con esto ya has aprendido lo que son los <strong>props</strong>!</p>

        <p><strong>Tips:</strong></p>
        <ul>
            <li>Acordarse que los <strong>props</strong> son solo de lectura, esto significa que no debes cambiarles su valor.</li>
            <li>Ya que <strong>props</strong> es un objeto, puedes lo puedes desestructurar del modo.</li>
            <li>Los valores de los <strong>props</strong> pueden ser: un objeto, array, cadena, número, función, incluso componentes o
                elementos. También hay un <strong>prop</strong> especial llamado children que es el contenido hijo de un componente.</li>
            <li>Existe una herramienta llamada <strong>prop-types</strong> qué nos sirve para validar el tipado de los props que
                recibe un componente, úsala siempre.</li>
        </ul>
    </div>
  );
};

export default PropsPage;