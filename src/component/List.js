import React from "react";
import Person from "./Person";

function List() {
  //   const names = ["Mohan", "Paul", "Tina"];
  //   const nameList = names.map((eachName) => <h2>{eachName}</h2>);
  //   return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "Mohan",
      age: 22,
    },
    {
      id: 2,
      name: "Paul",
      age: 45,
    },
    {
      id: 3,
      name: "Tina",
      age: 31,
    },
  ];

  const personList = persons.map((eachPerson) => (
    <Person key={eachPerson.id} person={eachPerson}>
      {" "}
    </Person>
  ));

  return <div>{personList}</div>;
}

export default List;
