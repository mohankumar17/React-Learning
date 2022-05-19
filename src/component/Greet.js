import React from "react";

/*function Greet(){
    return <div>Hello Mohan</div>
}*/

//Functional Component
/*const Greet = () => {
  return <div>React Functional Component</div>;
};*/

/*const Greet = (props) => {
  //console.log(props);
  return <div>Hi {props.name}</div>;
};*/

// Destructuring Props
const Greet = (props) => {
  const {name} = props;
  //console.log(props);
  return <div>Hi {name}</div>;
};

export default Greet;
