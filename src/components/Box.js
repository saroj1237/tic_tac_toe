import React, { useState } from "react";

function Box({ value, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      {value}
    </div>
  );
}

export default Box;
