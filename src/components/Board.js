import React, { useState } from "react";
import Box from "./Box";
function Board() {
  const [boardBox, setBoardBox] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (index) => {
    const newBoardBox = [...boardBox];
    if (newBoardBox[index]) return;
    newBoardBox[index] = xIsNext ? "X" : "O";
    setBoardBox(newBoardBox);
    setXIsNext(!xIsNext);
  };

  //create buildsquare function
  const buildBox = (index) => {
    return (
      <Box
        value={boardBox[index]}
        onClick={() => {
          handleClick(index);
        }}
      />
    );
  };

  return (
    <>
      <div>
        {buildBox(0)}
        {buildBox(1)}
        {buildBox(2)}
      </div>
      <div>
        {buildBox(3)}
        {buildBox(4)}
        {buildBox(5)}
      </div>
      <div>
        {buildBox(6)}
        {buildBox(7)}
        {buildBox(8)}
      </div>
    </>
  );
}

export default Board;
