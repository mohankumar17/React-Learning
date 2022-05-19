import React from "react";

const Hello = (props) => {
  //with JSX
  return (
    <div className="name">
      <h1>Hello Mohan</h1>
    </div>
  );

  //without JSX
  /*return React.createElement(
    "div",
    { className: "name" },
    React.createElement("h1", null, "Hello Mohan")
  );*/
};

export default Hello;
