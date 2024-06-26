import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [isInputID, setIsInputID] = useState(false);

  // url for apis
  const tankUrl = "http://localhost:5000/api/tank"
  const boardUrl = "http://localhost:5000/api/board/";

  // create the game  as the first player
  const createGame = async () => {
    try {
      console.log(89);
      await axios
        .get(`${boardUrl}createBoard`)
        .then((res) => {
          console.log(res.data.newBoard._id);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  // join game using gameID
  const joinGame = async(event)=>{
    try {
      console.log(event)
      axios.post(`${boardUrl}addTank/${event}`).then((res)=>{
        console.log(res)
      }).catch(error=> console.log(error))
    } catch (error) {
      console.log(error) 
    }
  }
  return (
    <div >
      <div className="container-fluid mx-5 ">
        <div className="row d-flex justify-content-end mx-5">
          <div className="col  ">
            <p className="text-white fs-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              laudantium itaque esse eligendi quisquam
            </p>
          </div>
          <div className="col">
            <div className="row my-4 px-5 mx-5 ">
              <button className="btn btn-primary fs-3" onClick={()=>setIsInputID(true)}>Join Game</button>
            </div>
            {isInputID ? (
              <div className="row d:none px-5 mx-5 ">
                <input
                  type="text"
                  class="form-control form-control-lg "
                  placeholder="Enter Game ID"
                  onChange={()=>joinGame()}
                />
              </div>
            ) : (
              <></>
            )}
            <div className="row my-4 px-5 mx-5">
              <button
                className="btn btn-primary fs-3"
                onClick={() => createGame()}
              >
                Create Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
