import React from "react";

const person = (props) => {
  // const age = Math.floor(Math.random() * 50)
  return (
    <div>
      <p>I'm {props.name} and I am {props.age} years old. {props.children}</p>
      {/* <p>{props.children}</p> */}
    </div>
  )
};

export default person;
