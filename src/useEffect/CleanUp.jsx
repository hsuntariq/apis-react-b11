import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <>
      <div className="container text-center">
        <h1 className="display-1">Window size:{size}px</h1>
      </div>
    </>
  );
};

export default CleanUp;
