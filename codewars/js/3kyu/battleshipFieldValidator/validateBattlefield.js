export const validateBattlefield = (field) => {
  const fieldLength = 10;
  const maxShipLength = 4;
  const limits = {
    battleships: 1,
    cruisers: 2,
    destroyers: 3,
    submarines: 4,
  };
  const ships = { battleships: 0, cruisers: 0, destroyers: 0, submarines: 0 };
  const visitedCells = new Set();
  const visitCell = (row, col) => {
    visitedCells.add(`${row},${col}`);
  };
  const isCellVisited = (row, col) => visitedCells.has(`${row},${col}`);
  let currentShip = [];
  let currentShipDirection = null;

  const getNextCell = () => {
    for (let i = 0; i < fieldLength; i++) {
      for (let j = 0; j < fieldLength; j++) {
        if (!isCellVisited(i, j)) {
          return [i, j];
        }
      }
    }

    return [fieldLength - 1, fieldLength - 1];
  };

  const checkDiagonalCells = (row, col) => {
    const topLeft = [row - 1, col - 1];
    const bottomLeft = [row + 1, col - 1];
    const topRight = [row - 1, col + 1];
    const bottomRight = [row + 1, col + 1];
    const diagonalChecks = [topLeft, bottomLeft, topRight, bottomRight];

    for (let i = 0; i < diagonalChecks.length; i++) {
      const [currentRow, currentCol] = diagonalChecks[i];

      if (
        currentRow >= 0 &&
        currentRow < fieldLength &&
        currentCol >= 0 &&
        currentCol < fieldLength &&
        !isCellVisited(currentRow, currentCol)
      ) {
        visitCell(currentRow, currentCol);

        if (field[currentRow][currentCol]) {
          throw new Error(`diagonal checks failed, row: ${currentRow}, col: ${currentCol}`);
        }
      }
    }
  };

  const checkStraightCell = (row, col) => {
    const top = [row - 1, col, 'vertical'];
    const bottom = [row + 1, col, 'vertical'];
    const left = [row, col - 1, 'horizontal'];
    const right = [row, col + 1, 'horizontal'];

    const straightChecks = [top, bottom, left, right];

    for (let i = 0; i < straightChecks.length; i++) {
      const [currentRow, currentCol, shipDirection] = straightChecks[i];

      if (
        currentRow >= 0 &&
        currentRow < fieldLength &&
        currentCol >= 0 &&
        currentCol < fieldLength &&
        !isCellVisited(currentRow, currentCol)
      ) {
        visitCell(currentRow, currentCol);

        if (field[currentRow][currentCol]) {
          currentShip.push([currentRow, currentCol]);

          if (currentShip.length > maxShipLength) {
            throw new Error(
              `length checks failed, current length: ${currentShip.length}, maxShipLength: ${maxShipLength}`
            );
          }

          if (!currentShipDirection) {
            currentShipDirection = shipDirection;
          }

          if (currentShipDirection !== shipDirection) {
            throw new Error(
              `ship direction checks failed, currentShipDirection: ${currentShipDirection}, expected ship direction: ${shipDirection}`
            );
          }
        }
      }
    }
  };

  const checkShipsLimit = () => {
    const shipsKeys = Object.keys(ships);

    for (let i = 0; i < shipsKeys.length; i++) {
      if (limits[shipsKeys[i]] < ships[shipsKeys[i]]) {
        throw new Error(
          `max ${shipsKeys[i]} count exceeded, limit: ${limits[shipsKeys[i]]}, actual value: ${
            ships[shipsKeys[i]]
          }`
        );
      }
    }
  };

  const addNewShip = () => {
    if (currentShip.length === 1) {
      ships.submarines++;
    }

    if (currentShip.length === 2) {
      ships.destroyers++;
    }

    if (currentShip.length === 3) {
      ships.cruisers++;
    }

    if (currentShip.length === 4) {
      ships.battleships++;
    }
    currentShip = [];
    currentShipDirection = null;
  };

  const checkNearest = (row, col) => {
    const currentShipLength = currentShip.length;

    checkDiagonalCells(row, col);
    checkStraightCell(row, col);

    if (currentShipLength !== currentShip.length) {
      checkNearest(...currentShip[currentShip.length - 1]);
    } else {
      addNewShip();
      checkShipsLimit();
    }
  };

  const checkShipsCount = () => {
    return (
      ships.submarines === limits.submarines &&
      ships.destroyers === limits.destroyers &&
      ships.cruisers === limits.cruisers &&
      ships.battleships === limits.battleships
    );
  };

  const iterate = (row = 0, col = 0) => {
    try {
      visitCell(row, col);

      if (field[row][col]) {
        currentShip.push([row, col]);
        checkNearest(row, col);
      }
      const [nextRow, nextCol] = getNextCell();

      if (nextRow === row && nextCol === col) {
        return checkShipsCount();
      }

      return iterate(nextRow, nextCol);
    } catch (e) {
      return false;
    }
  };

  return iterate();
};
