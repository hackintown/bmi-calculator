import React, { useMemo, useState } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("180");

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <div className="container">
      <div className="calc-wrap">
        <h1>BMI Calculator</h1>
        <div className="content">
          <p>Weight {weight} Kg</p>
          <input
            className=""
            type="range"
            step="1"
            min="40"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="content">
          <p>Height {height} cm</p>
          <input
            className=""
            type="range"
            step="1"
            min="40"
            max="200"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="output">
          <h2>Your BMI Is</h2>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
