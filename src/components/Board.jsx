import React from 'react';
import Square from './Square';


const Board = ({board , handleSquareClick, winningSquares}) => {

  
  const renderSq = position => {

    const isWinningSquare = winningSquares.includes(position);



    return(
    <Square value={board[position]}
    onClick={ () => {handleSquareClick(position)}}
    isWinningSquare={isWinningSquare}/>
    )
  }

  return (
    <div className='board'>
      <div className='board-row'>
        {renderSq(0)}
        {renderSq(1)}
        {renderSq(2)}
      </div>
      <div className='board-row'>
        {renderSq(3)}
        {renderSq(4)}
        {renderSq(5)}
        </div>
      <div className='board-row'>
        {renderSq(6)}
        {renderSq(7)}
        {renderSq(8)}
        </div>
    </div>
  )
}

export default Board;
