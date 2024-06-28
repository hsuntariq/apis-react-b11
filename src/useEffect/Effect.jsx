import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log("Salam");
  });

  return (
    <>
      <div className="container text-center">
        <h1 className="display-1 text-center">{count}</h1>
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          Increase
        </button>
      </div>
    </>
  );
};

export default Effect;
