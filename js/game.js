class Game {
  constructor(snake, food) {
    this.snake = snake;
    this.food = food;
  }
  moveSnake() {
    this.snake.move();
  }
  snakeDirection(direction) {
    this.snake.changeDirection(direction);
  }
  hasEatenFood() {
    if (this.snake.isFoodEaten(this.food)) {
      const foodPosition = this.food.getPosition();
      this.food = this.food.getNewPositionOfFood();
      return foodPosition;
    }
  }
}
