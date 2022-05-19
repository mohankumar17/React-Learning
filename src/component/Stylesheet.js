import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  return (
    <div>
      <h1 className="primary">StyleSheet</h1>
    </div>
  );

  /*return props.primary ? (
    <div>
      <h1 className="primary">Stylesheet</h1>
    </div>
  ) : (
    <div>
      <h1>Stylesheet</h1>
    </div>
  );*/
}

export default Stylesheet;
