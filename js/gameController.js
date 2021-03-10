class Controller {
  constructor(presenter, game) {
    this.presenter = presenter;
    this.game = game;
  }
  start() {
    this.presenter.createCells();
    this.presenter.drawSnake();
  }

  runGame() {
    this.presenter.drawFood();
    this.presenter.drawSnake();
    this.game.moveSnake();
    const foodPosition = this.game.hasEatenFood();
    this.presenter.eraseFood(foodPosition);
  }
  changeDirection(direction) {
    this.game.snakeDirection(direction);
  }
}
