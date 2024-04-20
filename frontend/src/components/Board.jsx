import "./board.css";
import React, { useState, useEffect } from "react";
import T from "../assets/istockphoto-1222709954-1024x1024.jpg";
import S from "../assets/circle-image.jpg";
import { InitializeGame, possibleMoves } from "../Logic/Logic.js";

export default function Board() {
  // Array which will be used to
  // display the chessboard
  const [chessBoard, setChessBoard] = useState([]);

  const showBoard = () => {
    setChessBoard(InitializeGame());
  };

  const showPossibleMoves = (tankPosX, tankPosY) => {
    setChessBoard(possibleMoves(chessBoard,tankPosX,tankPosY))
  };



  return (
    <>
      {chessBoard.map((row, rIndex) => (
        <div className="row-board" key={rIndex}>
          {row.map((_, cIndex) => (
            <div
              className={`box-board ${
                (rIndex + cIndex) % 2 === 0 ? "black" : "white"
              }`}
              onClick={() => showPossibleMoves(rIndex, cIndex)}
              key={cIndex}
            >
              {chessBoard[rIndex][cIndex] == "s" && (
                <>
                  <img
                    width={50}
                    height={50}
                    src={S} // Use the imported image variable here
                    alt="example"
                  />
                </>
              )}
              {chessBoard[rIndex][cIndex] === "t" && (
                <>
                  <img
                    width={50}
                    height={50}
                    src={T} // Use the imported image variable here
                    alt="example"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="ActionButton">
        <button onClick={() => showBoard()}>Start</button>
        <button>Move </button>
        <button>Attack </button>
        <button>Transfer</button>
        <button>Upgrade</button>
      </div>
    </>
  );
}
//   These 2 line are written so that i reach 
// 69 line of code today 