import React from "react";

//function ForwardRef() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   );
//}

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default FRInput;
