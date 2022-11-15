import React from 'react';
import Square from './Square';


const Board = ({board , handleSquareClick}) => {

  
  const renderSq = position => {
    return(
    <Square value={board[position]}
    onClick={ () => {handleSquareClick(position)}}
    />
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
