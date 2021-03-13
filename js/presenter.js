const getCellId = (rowId, colId) => `cell-${colId}_${rowId}`;

const getCell = (rowId, colId) => getElement(`#${getCellId(rowId, colId)}`);
class Presenter {
  constructor(grid, game) {
    this.grid = grid;
    this.game = game;
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
    const tail = this.game.snake.getTail();
    const $tail = getCell(tail[0], tail[1]);
    $tail.classList.remove('snake');
    const snakePosition = this.game.snake.getPosition();
    snakePosition.forEach((position) => {
      const cell = getCell(position[0], position[1]);
      cell.classList.add('snake');
    });
  }

  drawFood() {
    const foodPosition = this.game.food.getPosition();
    const $foodPosition = getCell(foodPosition[0], foodPosition[1]);
    $foodPosition.classList.add('food');
  }
  eraseFood() {
    const foodPosition = this.game.food.getPreviousFoodPosition();
    const $foodPosition = getCell(foodPosition[0], foodPosition[1]);
    $foodPosition.classList.remove('food');
  }
  displayScore() {
    const $score = getElement('#score');
    $score.innerText = `Score: ${this.game.score.getScore()}`;
  }
}
