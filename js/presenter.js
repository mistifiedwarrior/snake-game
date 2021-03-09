const NUM_OF_ROWS = 60;
const NUM_OF_COLS = 80;

const getCellId = (rowId, colId) => `cell-${colId}_${rowId}`;

const getCell = (rowId, colId) => getElement(`#${getCellId(rowId, colId)}`);
class Presenter {
  constructor(grid, game, snake) {
    this.grid = grid;
    this.game = game;
    this.snake = snake;
  }
  createCells() {
    for (let rowId = 0; rowId <= NUM_OF_ROWS; rowId++) {
      for (let colId = 0; colId < NUM_OF_COLS; colId++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = getCellId(rowId, colId);
        this.grid.appendChild(cell);
      }
    }
  }
  drawSnake() {
    const tail = this.snake.getTail();
    const $tail = getCell(tail[0], tail[1]);
    $tail.classList.remove('snake');
    const snakePosition = this.snake.getPosition();
    snakePosition.forEach((position) => {
      const cell = getCell(position[0], position[1]);
      cell.classList.add('snake');
    });
  }
}
