import React from "react";

const Display = (props) => {
  return (
    <div style={{ border: "3px solid red", margin: "25px" }}>
      <h1>Display Watch</h1>
      <h3>Name: {props.name}</h3>
      <h5>So far steps today: {props.steps}</h5>
    </div>
  );
};

export default Display;
