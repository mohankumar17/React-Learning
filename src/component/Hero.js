import React from "react";

function Hero(props) {
  if (props.name === "Joker") {
    throw new Error("Joker is not Hero");
  }
  return <h1>{props.name}</h1>;
}

export default Hero;
