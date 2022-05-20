import React from "react";
import { UserConsumer } from "./UserContext";

function LevelTwoComp() {
  return (
    <div>
      <UserConsumer>
        {(name) => {
          return <div>Hello {name}</div>;
        }}
      </UserConsumer>
    </div>
  );
}

export default LevelTwoComp;
