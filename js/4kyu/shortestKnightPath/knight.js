export const knight = (start, finish) => {
  class Node {
    constructor(name, x, y, visited = false, distance = Infinity) {
      this._x = x;
      this._y = y;
      this._visited = visited;
      this._distance = distance;
    }
  }

  const chessRows = [1, 2, 3, 4, 5, 6, 7, 8];
  const chessCols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const chessMap = {};
  const chessBoard = [];

  for (let i = 0; i < chessRows.length; i++) {
    chessBoard.push([]);

    for (let j = 0; j < chessCols.length; j++) {
      const cell = `${chessCols[j]}${chessRows[i]}`;

      chessMap[cell] = [i, j];
      chessBoard[i].push(new Node(cell, i, j));
    }
  }

  const findPossibleNextMoves = (x0, y0, distance) => {
    const allMoves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    const possibleMoves = [];

    for (let i = 0; i < allMoves.length; i++) {
      const [dx, dy] = allMoves[i];
      const x1 = x0 + dx;
      const y1 = y0 + dy;

      if (chessBoard[x1] && chessBoard[x1][y1]) {
        if (!chessBoard[x1][y1]._visited) {
          chessBoard[x1][y1]._distance = distance;
          possibleMoves.push(chessBoard[x1][y1]);
        }
      }
    }

    return possibleMoves;
  };

  const [xStart, yStart] = chessMap[start];
  const [xFinish, yFinish] = chessMap[finish];
  let queue = [chessBoard[xStart][yStart]];
  let distance = 0;

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode._distance === Infinity) {
      currentNode._distance = distance;
    }

    if (currentNode._x === xFinish && currentNode._y === yFinish) {
      return currentNode._distance;
    }

    currentNode._visited = true;

    const moves = findPossibleNextMoves(currentNode._x, currentNode._y, currentNode._distance + 1);

    moves.forEach((move) => {
      queue.push(move);
    });
  }

  return distance;
};
