import React, { useState } from "react";
import Box from "./Box";
function Board() {
  const [boardBox, setBoardBox] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = decideWinner(boardBox);
  const handleClick = (index) => {
    const newBoardBox = [...boardBox];
    if (winner || newBoardBox[index]) return;
    newBoardBox[index] = xIsNext ? "X" : "O";
    setBoardBox(newBoardBox);
    setXIsNext(!xIsNext);
  };
  let winnerText = winner? `Winner is ${winner}`: "Tie";
  let label = `Next player:${xIsNext ? "X" : "O"}`;

  //create buildBox function
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
      <div>{label}</div>
      <div className="board">
        <div className="board-Row">
          {buildBox(0)}
          {buildBox(1)}
          {buildBox(2)}
        </div>
        <div className="board-Row">
          {buildBox(3)}
          {buildBox(4)}
          {buildBox(5)}
        </div>
        <div className="board-Row">
          {buildBox(6)}
          {buildBox(7)}
          {buildBox(8)}
        </div>
      </div>
      <h4>{winnerText}</h4>
    </>
  );
}

function decideWinner(boxes) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 4],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombination.length; i++) {
    const [a, b, c] = winningCombination[i];
    if (boxes[a] && boxes[a] == boxes[b] && boxes[b] == boxes[c]) {
      return boxes[a];
    }
  }
  return null;
}

export default Board;
