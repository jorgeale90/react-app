import React from 'react';

import {RModalImages} from "react-modal-images";
import Image29 from "../../assets/images/code/29.png";

type Props = {};

const CyclePage = (props: Props) => {
  return (
      <div className="content">
          <h3>Ciclo de vida de un componente:</h3>
          <p>Una gran diferencia entre un componente de tipo clase y uno de tipo function es que en el de tipo
              clase nos da acceso a unos métodos reservados que nos permiten acceder al ciclo de vida del componente.</p>

          <p>Nota: en la parte de los <strong>hooks</strong> veremos cómo podemos replicar el mismo comportamiento en
              componentes de tipo function.</p>

          <p>El ciclo de vida más común de un componente consiste en:</p>
          <ul>
              <li>Antes de montarse en el <strong>DOM</strong>.</li>
              <li>Cuando ya se montó en el <strong>DOM</strong>.</li>
              <li>Cuando se ha actualizado el componente (la actualización de un <strong>prop</strong> o del <strong>state</strong>).</li>
              <li>Cuando se va a desmontar del <strong>DOM</strong>.</li>
          </ul>

          <p>Veamos un ejemplo en código.</p>

          <RModalImages className="image-element"
                        small={Image29}
                        medium={Image29}
                        large={Image29}
                        alt={"Ciclo de Vida en React."}
          />

          <p>Al ejecutar este código, veremos los <strong>console logs</strong> en la consola del navegador.</p>

          <p>Este es el orden en que se ejecuta este componente:</p>
          <ul>
              <li>El <strong>constructor</strong> es llamado antes de que el componente sea montado.</li>
              <li>Se ejecuta el método <strong>render</strong>.</li>
              <li><strong>componentDidMount</strong> se ejecuta inmediatamente después de que se ha montado el componente.</li>
              <li>Ya que en <strong>componentDidMount</strong> estamos actualizando el estado, hace que ahora se
                  ejecute el método <strong>componentDidUpdate</strong>.</li>
              <li>Se vuelve a ejecutar el método <strong>render</strong>.</li>
              <li>Ya que no estamos removiendo el componente del <strong>DOM</strong>, <strong>componentWillUnmount</strong> no se ejecutará
                  hasta que explícitamente lo hagamos.</li>
          </ul>

          <p><strong>Tips en el constructor</strong>:</p>
          <ul>
              <li>Si no inicializas estado y no haces bind de métodos, no necesitas
                  implementar el constructor. Siempre debes ejecutar <strong>super(props)</strong> en el constructor para
                  que <strong>this.props</strong> exista en el componente.</li>
              <li>No debes llamar <strong>setState</strong> en el constructor, llama <strong>this.state</strong>
                  &nbsp;para asignar valores la estado directamente.</li>
              <li>No implementes lógica que haga efectos secundarios como una llamada a una api en el constructor.</li>
              <li>No copies los valores de los <strong>props</strong> en el estado. Cuando se actualice el <strong>prop</strong>, no se verá reflejado
                  en el <strong>state</strong>. Mejor usa los <strong>props</strong> directamente.</li>
          </ul>

          <p><strong>Tips en componentDidMount:</strong></p>
          <ul>
              <li>Es el lugar adecuado para llamadas a apis. Ejemplo: cuando consumes una api para cargar y mostrar
                  los datos en tu componente.</li>
              <li>Es buen lugar para crear suscripciones.</li>
          </ul>

          <p><strong>Tips en componentDidUpdate:</strong></p>
          <ul>
              <li>Toma en cuenta que no se ejecuta la primera vez que se monta el componente.</li>
              <li>Buen lugar para optimizar las llamadas a apis solo si es realmente necesario.</li>
              <li>Incluso si aqui actualizas el estado, este método se volverá a ejecutar. Para evitar <strong>loops</strong>
                  &nbsp;infinitos de actualizaciones, coloca una condición antes de actualizar el estado.</li>
          </ul>

          <p><strong>Tips en componentWillUnmount:</strong></p>
          <ul>
              <li>Buen lugar para limpiar las suscripciones que hayas hecho en <strong>componentDidMount</strong>.</li>
              <li>No llames <strong>setState</strong> aquí debido a que el componente será desmontado y no seguirá existiendo.</li>
          </ul>
      </div>
  );
};

export default CyclePage;