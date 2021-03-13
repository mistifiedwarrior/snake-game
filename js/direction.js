const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';

class Direction {
  constructor() {
    this.direction = RIGHT;
  }

  getDelta() {
    if (this.direction === RIGHT) {
      return [0, 1];
    }
    if (this.direction === LEFT) {
      return [0, -1];
    }
    if (this.direction === UP) {
      return [-1, 0];
    }
    if (this.direction === DOWN) {
      return [1, 0];
    }
  }
  setDirection(dir) {
    if (this.direction == RIGHT && dir != LEFT) {
      this.direction = dir;
    }
    if (this.direction == UP && dir != DOWN) {
      this.direction = dir;
    }
    if (this.direction == DOWN && dir != UP) {
      this.direction = dir;
    }
    if (this.direction == LEFT && dir != RIGHT) {
      this.direction = dir;
    }
  }
}
