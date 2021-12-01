import React from "react";

//stateless component
function DisplayProp({ propName, value }) {
  return (
    <>
      <div>{propName}</div>
      <div>{value}</div>
    </>
  );
}

export default DisplayProp;
