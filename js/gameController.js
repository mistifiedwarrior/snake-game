class Controller {
  constructor(presenter, game) {
    this.presenter = presenter;
    this.game = game;
  }
  start() {
    this.presenter.createCells();
    this.presenter.drawSnake();
    this.presenter.drawFood();
    this.presenter.displayScore();
  }

  runGame() {
    this.game.moveSnake();
    if (this.game.hasEatenFood()) {
      this.presenter.eraseFood();
      this.presenter.displayScore();
      this.presenter.drawFood();
    }
    this.presenter.drawSnake();
  }
  changeDirection(direction) {
    this.game.snakeDirection(direction);
  }
}
