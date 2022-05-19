import React from "react";

function Person(props) {
  //console.log(props.person);
  const eachPerson = props.person;
  return (
    <div>
      <h2>
        {eachPerson.name} is {eachPerson.age} years old.
      </h2>
    </div>
  );
}

export default Person;
