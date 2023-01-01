import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import './styles/root.scss';
import {calculateWinner} from "./helpers";
import StatusMessage from "./components/StatusMessage";

const NewGame= [{board:Array(9).fill(null),isNext:true}];
const App = () => {
    
  const [history,setHistory]= useState(NewGame);
  const [currentMove, setCurrentMove]=useState(0);
  const current= history[currentMove];

  console.log("history", history);

  //const [isNext,setIsNext]= useState(false);
  const {winner, winningSquares}= calculateWinner(current.board);

  const handleSquareClick= position =>{
    if(current.board[position] || winner){
      return;
    }
    setHistory(prev =>{
const last= prev[prev.length-1];

const newBoard = last.board.map((square,pos) => {
        if (pos === position){
          return last.isNext ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({ board: newBoard, isNext: !last.isNext});
    });

    setCurrentMove(prev => prev+1);

  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const onNewGame= () => {
    setHistory(NewGame);
    setCurrentMove(0);

  }



  return(
  <div className="app">
    <h1>TIC <span className="text-green">TAC</span> TOE</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>
      Start New Game</button>
      <h2 style={{fontweight:'normal'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
  <div className="bg-balls"/>
  </div>

  
  );
};

export default App;

