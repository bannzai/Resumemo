import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  return (
    <>
      <div>
        <p>Hello, Wolrd</p>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
