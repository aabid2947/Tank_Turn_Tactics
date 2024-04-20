import "./board.css";
import React, { useState, useEffect } from "react";
import T from "../assets/istockphoto-1222709954-1024x1024.jpg";
import S from "../assets/circle.png";
import { InitializeGame, possibleMoves } from "../Logic/Logic.js";
import Tank from "../Logic/Tank.js";

export default function Board() {
  // Array which will be used to
  // display the chessboard
  const [chessBoard, setChessBoard] = useState([]);
  const [validMoves, setValidMoves] = useState([]);
  const [Tank1, setTank1] = useState({
    name: "Aabid",
    life: 3,
    range: 1,
    energy: 3,
    xcor: -1,
    ycor: -1,
    turn: true,
  });

  const [Tank2, setTank2] = useState({
    name: "firoz",
    life: 3,
    range: 1,
    energy: 3,
    xcor: -1,
    ycor: -1,
    turn: false,
  });
  const [Tank3, setTank3] = useState({
    name: "harshit",
    life: 3,
    range: 1,
    energy: 3,
    xcor: -1,
    ycor: -1,
    turn: false,
  });

  const showBoard = () => {
    let board = InitializeGame();
    setChessBoard(board);

    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        if (board[i][j] == "t") {
          if (Tank1.xcor < 0 && Tank1.ycor < 0) {
            setTank1((prevState) => ({
              ...prevState, // Spread the previous state to avoid mutation
              xcor: i,
              ycor: j,
            }));
          }
          break;
        }
      }
    }
  };

  const showPossibleMoves = (tankPosX, tankPosY) => {
    console.log(Tank1);
    const valid_moves = possibleMoves(chessBoard, tankPosX, tankPosY);
    setValidMoves(valid_moves);
    let board = chessBoard;
    if (valid_moves) {
      valid_moves.forEach((pos, index) => {
        board[pos[0]][pos[1]] = "s";
      });
    }

    setChessBoard(board);
  };

  const moveTank = (xcor, ycor) => {
    let board = chessBoard;
    validMoves.forEach((pos) => {
      if (pos[0] == xcor && pos[1] == ycor) {
        board[xcor][ycor] = "t";
        board[Tank1.xcor][Tank1.ycor] = "";
      }
    });
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        if (board[i][j] == "s") {
          board[i][j] = "";
        }
      }
    }
    setValidMoves([]);
  };

  return (
    <>
      <div className="container d-flex align-item-center">
        {chessBoard.map((row, rIndex) => (
          <div className="row m-0" key={rIndex}>
            {row.map((_, cIndex) => (
              <div
                className={`container ${
                  (rIndex + cIndex) % 2 === 0 ? "black" : "white"
                }`}
                onClick={() => {
                  if (validMoves.length > 0) {
                    moveTank(rIndex, cIndex);
                  } else {
                    showPossibleMoves(rIndex, cIndex);
                  }
                }}
                key={cIndex}
                style={{ width: "50px", height: "50px" }}
              >
                {chessBoard[rIndex][cIndex] === "s" && (
                  <>
                    <img
                      width={20}
                      height={20}
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
      </div>
      <div className="container my-4">
        <button
          onClick={() => showBoard()}
          type="button"
          class="btn btn-primary mx-2"
        >
          Start
        </button>
        <button type="button" class="btn btn-warning mx-2">
          Move
        </button>
        <button type="button" class="btn btn-danger mx-2">
          Attack
        </button>
        <button type="button" class="btn btn-info mx-2">
          Transfer
        </button>
        <button type="button" class="btn btn-success mx-2">
          Upgrade
        </button>
      </div>
    </>
  );
}
//   These 2 line are written so that i reach
// 69 line of code today
