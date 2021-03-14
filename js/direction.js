const RIGHT = 'RIGHT';
const LEFT = 'LEFT';
const UP = 'UP';
const DOWN = 'DOWN';

class Direction {
  constructor() {
    this.direction = RIGHT;
  }

  getDelta() {
    const delta = {
      [RIGHT]: [0, 1],
      [LEFT]: [0, -1],
      [UP]: [-1, 0],
      [DOWN]: [1, 0],
    };
    return delta[this.direction];
  }
  setDirection(dir) {
    if (
      (this.direction == RIGHT && dir != LEFT) ||
      (this.direction == UP && dir != DOWN) ||
      (this.direction == DOWN && dir != UP) ||
      (this.direction == LEFT && dir != RIGHT)
    ) {
      this.direction = dir;
    }
  }
}
