import "./H1.css";
import { React } from "react";
/// ----> rafce
// con este snippe se os crea directamente un componente con la estructura deel componente
const H1 = (props) => {
  return (
    <>
      <p>El contador vale este valor: {props.count}</p>
      {/*el button controla el cambio de estado del padre*/}
      <button onClick={() => props.title(props.count + 1)}>{""}</button>
    </>
  );
};

export default H1;
