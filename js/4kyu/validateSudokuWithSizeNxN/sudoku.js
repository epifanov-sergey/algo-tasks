export class Sudoku {
  init() {
    this._matrix = null;
    this._invertedMatrix = null;
    this._isValid = false;
    this._xSize = 0;
    this._ySize = 0;
    this._squareSize = 0;
    this._uniqueInRow = false;
    this._uniqueInCol = false;
    this._uniqueInSquare = false;
    this._onlyInteger = true;
    this._inRange = true;
  }

  constructor(data) {
    this.init();

    if (Array.isArray(data)) {
      this._matrix = data;
      this._invertedMatrix = this.invert(data);
      this.validate();
    }
  }

  invert(data) {
    const res = [];

    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        if (!res[col]) {
          res[col] = [];
        }
        res[col][row] = data[row][col];
      }
    }

    return res;
  }

  validate() {
    this._xSize = this._matrix.length;
    this._squareSize = Math.sqrt(this._xSize);

    for (let row = 0; row < this._matrix.length; row++) {
      this._ySize =
        this._ySize > 0
          ? Math.min(this._ySize, this._matrix[row].length)
          : this._matrix[row].length;

      for (let col = 0; col < this._matrix[row].length; col++) {
        const current = this._matrix[row][col];

        this._uniqueInRow = this.isUniqueValueInArray(current, this._matrix[row]);
        this._uniqueInCol = this.isUniqueValueInArray(current, this._invertedMatrix[col]);
        this._uniqueInSquare = this.isUniqueValueInArray(
          current,
          this.getSegmentValues(row, col, this._xSize)
        );

        if (current > this._xSize || current < 1) {
          this._inRange = false;
        }

        if (!Number.isInteger(current)) {
          this._onlyInteger = false;
        }
      }
    }

    const validateRules = [
      this.isValidDimensions(),
      this._uniqueInCol,
      this._uniqueInRow,
      this._uniqueInSquare,
      this._onlyInteger,
      this._inRange,
    ];

    this._isValid = !validateRules.includes(false);
  }

  isValidDimensions() {
    return this._xSize === this._ySize && Number.isInteger(this._squareSize);
  }

  isUniqueValueInArray(value, arr) {
    return arr.filter((i) => i !== value).length === arr.length - 1;
  }

  getSegmentValues(row, col, size) {
    const step = Math.sqrt(size);
    const rowStart = Math.floor(row / step) * step;
    const rowEnd = rowStart + step;
    const colStart = Math.floor(col / step) * step;
    const colEnd = colStart + step;
    const res = [];

    for (let i = rowStart; i < rowEnd; i++) {
      for (let j = colStart; j < colEnd; j++) {
        if (this._matrix[i]) {
          res.push(this._matrix[i][j]);
        }
      }
    }

    return res;
  }

  isValid() {
    return this._isValid;
  }
}
