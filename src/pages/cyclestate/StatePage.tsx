import React from 'react';

import {RModalImages} from "react-modal-images";
import Image25 from "../../assets/images/code/25.png";
import Image26 from "../../assets/images/code/26.png";
import Image27 from "../../assets/images/code/27.png";

type Props = {};

const StatePage = (props: Props) => {
  return (
      <div className="content">
          <h3>Estados:</h3>
          <p>El <strong>state</strong> son los valores internos que manejan la lógica y los datos de un componente, permite que
              éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.</p>

          <p>El estado tiene 3 características importantes:</p>
          <ul>
              <li>Es inmutable.</li>
              <li>No se puede modificar directamente.</li>
              <li>Es asíncrono.</li>
          </ul>

          <p>Para hacer cambios hay que hacer uso del método <strong>setState()</strong>.</p>

          <p>El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.</p>

          <p>La propagación del estado fluye de forma unidireccional y descendiente (hacia abajo), esto significa que
              un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades.</p>

          <p>En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como
              los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.</p>

          <p>Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado <strong>state</strong>.</p>

          <p>Cada vez que cambia el <strong>state</strong> React vuelve a renderizar (pintar) el componente en la vista.</p>

          <RModalImages className="image-element"
                        small={Image25}
                        medium={Image25}
                        large={Image25}
                        alt={"Estados en React."}
          />

          <p>En este ejemplo estamos definiendo una componente <strong>Welcome</strong> que inicializa el estado con una llave <strong>title</strong>.
              En el método render estamos obteniendo el valor de esa llave con <strong>this.state.title</strong>.</p>

          <p>Para cambiar el estado utiliza el método <strong>setState</strong>:</p>

          <RModalImages className="image-element"
                        small={Image26}
                        medium={Image26}
                        large={Image26}
                        alt={"Estados en React."}
          />

          <p>Vamos a ver un ejemplo de un componente que actualizará estado cada segundo solo como ejemplo.</p>

          <RModalImages className="image-element"
                        small={Image27}
                        medium={Image27}
                        large={Image27}
                        alt={"Estados en React."}
          />

          <p>Corriendo el ejemplo anterior, vamos a notar que el componente actualiza el contador de manera correcta!</p>

          <p>Nota: no es recomendable usar el setInterval en el constructor, vamos a cambiarlo a continuación.</p>

          <p><strong>Tips:</strong></p>
          <ul>
              <li>Modifica el estado solamente con <strong>setState</strong>. Si modificas el estado directamente, el componente no
              se volverá a renderizar.</li>
              <li>Considera que la actualización del estado puede ser asíncrona.</li>
              <li>Por performance, internamente React puede agrupar varias llamadas de setState, por lo que podría
              tener una version del estado counter diferente al que esperamos. Para solucionar lo anterior,&nbsp;
              <strong>setState</strong> acepta una función como primer argumento en lugar de un objeto.</li>
              <li>Las actualizaciones del estado se fusionan.</li>
          </ul>
      </div>
  );
};

export default StatePage;