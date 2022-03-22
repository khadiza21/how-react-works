import React, { useEffect, useState } from "react";
import Display from "../Display/Display";
import Tablet from "../Tablet/Tablet";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const increaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div style={{ border: "3px solid green", margin: "25px" }}>
      <h1>Counting Time</h1>
      <h4>Step {steps}</h4>
      <button onClick={increaseSteps}>Count</button>
      <Display name="addidus" steps={steps}></Display>
      <Tablet></Tablet>
    </div>
  );
};

export default Watch;
