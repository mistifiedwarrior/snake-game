class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
    this.score = new Score();
  }
  moveSnake() {
    this.snake.move();
  }
  snakeDirection(direction) {
    this.snake.changeDirection(direction);
  }
  hasEatenFood() {
    if (this.snake.isFoodEaten(this.food)) {
      this.snake.grow();
      this.food.getNewPositionOfFood();
      this.score.update();
      return true;
    }
    return false;
  }
}
