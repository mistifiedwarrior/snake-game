class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
  }
  moveSnake() {
    this.snake.move();
  }
}
