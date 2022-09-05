import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="wrapper">
      <span className="dot"></span>
      <div className="dots">
        <span className="dotss"></span>
        <span className="dotss"></span>
        <span className="dotss"></span>
      </div>
    </div>
  );
};

export default Loader;
