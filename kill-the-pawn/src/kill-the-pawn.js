'use strict';

const chess = module.exports = {};

chess.findTheBishop = (chessBoard) => {
  let boardArray = [];

  for (let i = 0; i < chessBoard.length; i++) {
    for (let j = 0; j < chessBoard.length; j++) {
      if (chessBoard[i][j] === 'p') {
        boardArray = [i, j];
        return boardArray;
      }
    }
  }
  return false;
};

chess.killPawn = (chessBoard) => {
  const bishop = chess.findTheBishop(chessBoard);

  for (let i = bishop[0]; i > 0; i--) {
    for (let j = bishop[1]; j > 0; j - 1) {
      if (chessBoard[i][j] === 'p') {
        return true;
      }
    }
    for (let k = bishop[1]; k < chessBoard.length; k + 1) {
      if (chessBoard[i][k] === 'p') {
        return true;
      }
    }
  }

  for (let i = bishop[0]; i < chessBoard.length; i++) {
    for (let j = bishop[1]; j > 0; j - 1) {
      if (chessBoard[i][j] === 'p') {
        return true;
      }
    }
    for (let k = bishop[1]; k < chessBoard.length; k + 1) {
      if (chessBoard[i][k] === 'p') {
        return true;
      }
    }
  }
  return false;
};
