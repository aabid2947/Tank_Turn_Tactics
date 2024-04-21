import "./board.css";
import React, { useState, useEffect } from "react";
import T from "../assets/istockphoto-1222709954-1024x1024.jpg";
import S from "../assets/circle.png";
import { InitializeGame, possibleMoves } from "../Logic/Logic.js";
import Tank from "../Logic/Tank.js";

export default function Board() {
  // Array which will be used to
  // display the board
 
  const getTank = async ()=>{
    const board = await fetch('./board')
    const Tank = await fetch('/api/').then(res>= res.json())
    await post('./board',xcor,ycor)
  }

  const [board, setboard] = useState([]);
  const [validMoves, setValidMoves] = useState([]);


  const showBoard = () => {
    let board = InitializeGame();
    setboard(board);
  };

  const showPossibleMoves = (tankPosX, tankPosY) => {
    const valid_moves = possibleMoves(board, tankPosX, tankPosY);
    setValidMoves(valid_moves);
    let board = board;
    if (valid_moves) {
      valid_moves.forEach((pos, index) => {
        board[pos[0]][pos[1]] = "s";
      });
    }

    setboard(board);
  };

  const moveTank = (xcor, ycor) => {
    let board = board;
    validMoves.forEach((pos) => {
      if (pos[0] == xcor && pos[1] == ycor) {
        board[xcor][ycor] = "t";
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
        {board.map((row, rIndex) => (
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
                {board[rIndex][cIndex] === "s" && (
                  <>
                    <img
                      width={20}
                      height={20}
                      src={S} // Use the imported image variable here
                      alt="example"
                    />
                  </>
                )}
                {board[rIndex][cIndex] === "t" && (
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
