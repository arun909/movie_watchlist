import React from "react";

const TupleExample: React.FC = () => {
  const user: [string, number] = ["Alice", 30]; // A simple tuple

  return (
    <div>
      <h1>Tuple Example</h1>
      <p>Name: {user[0]}</p>
      <p>Age: {user[1]}</p>
    </div>
  );
};

export default TupleExample;