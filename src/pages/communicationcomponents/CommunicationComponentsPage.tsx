import React from 'react';

import { RModalImages } from "react-modal-images";
import Image43 from "../../assets/images/code/43.png";
import Image44 from "../../assets/images/code/44.png";

type Props = {};

const CommunicationComponentsPage = (props: Props) => {
  return (
    <div className="content">
        <h3>Comunicación entre componentes:</h3>
        <p>Tenemos 3 casos de comunicación entre los componentes de React:</p>
        <ol>
            <li>Comunicación entre un componente padre a uno hijo.</li>
            <li>Comunicación entre un componente hijo y su padre.</li>
            <li>Comunicación entre componentes no relacionados.</li>
        </ol>

        <h3>Comunicación entre un componente padre a uno hijo</h3>

        <p>Éste es el caso más natural en el mundo de React y se hace a través del paso de <strong>props</strong> de un componente
            padre a uno hijo.</p>

        <RModalImages className="image-element"
                      small={Image43}
                      medium={Image43}
                      large={Image43}
                      alt={"Comunicación entre componentes en React."}
        />

        <h3>Comunicación entre un componente hijo y su padre</h3>

        <p>Cuando tenemos la necesidad de que un componente hijo mande datos a su padre los podemos hacer a traves de
            los eventos, simplemente pasamos una función como <strong>prop</strong> del componente padre al componente hijo, y éste
            ejecutará la función.</p>

        <p>En este ejemplo, cambiaremos el estado del componente padre pasando una función al componente hijo e
            invocando esa función dentro del componente hijo.</p>

        <RModalImages className="image-element"
                      small={Image44}
                      medium={Image44}
                      large={Image44}
                      alt={"Comunicación entre componentes en React."}
        />

        <h3>Comunicación entre componentes no relacionados:</h3>

        <p>Si los componentes no tienen una relación padre-hijo o están relacionados, pero están demasiado lejos,
            como por ejemplo, un bisnieto o tataranieto, tenemos que crear un mecanismo de observación y/o suscripción
            para la comunicación entre dichos componentes.</p>

        <p>Al menos existen 3 patrones para hacer esto.</p>
        <ol>
            <li>Patrón <strong>Emisor de eventos</strong> / <strong>Destino</strong> / <strong>Despachador</strong> : los
                oyentes deben hacer referencia a la fuente para suscribirse.</li>
            <li>Patrón <strong>Publicación</strong> / <strong>Suscripción</strong>: no necesita una referencia específica a la
                fuente que desencadena el evento, hay un objeto global accesible en todas partes que maneja todos los eventos.</li>
            <li>Patrón Señales: similar al <strong>Emisor de Eventos</strong>, pero aquí no usa cadenas aleatorias. Cada
                objeto que podría emitir eventos debe tener una propiedad específica con ese nombre. De
                esta manera, se sabe exactamente qué eventos puede emitir un objeto.</li>
            <li><a href="https://es.reactjs.org/docs/portals.html" target="_blank">Portales</a>: proporcionan una opción de primera clase para renderizar hijos en un nodo <strong>DOM</strong>
                que existe por fuera de la jerarquía del DOM del componente padre.</li>
        </ol>

        <p>Puedes encontrar más información al respecto en
            este <a href="https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations" target="_blank">enlace</a>.</p>

        <p>Otra manera de compartir datos entre componentes sin que tengan una relación padre-hijo es
            compartiendo un estado global accesible para todos los componentes de nuestra aplicación, para ello
            podríamos usar 2 opciones:</p>
        <ol>
            <li>Redux: librería externa a React para el manejo del estado.</li>
            <li>Context: un API interna de React que provee una forma de pasar datos a través del árbol de
                componentes sin tener que pasar props manualmente en cada nivel. Esta API la retomaremos cuando
                veamos el tema de <strong>Hooks</strong>.</li>
        </ol>
    </div>
  );
};

export default CommunicationComponentsPage;