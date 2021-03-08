class Controller {
  constructor(presenter, game) {
    this.presenter = presenter;
    this.game = game;
  }
  start() {
    this.presenter.createCells();
    this.presenter.drawSnake();
  }
}
