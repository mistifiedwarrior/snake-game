class Snake {
  constructor(position) {
    this.position = position; //[[0,0],[0,1],[0,2]]
    this.tail = [0, 0];
    this.direction = new Direction();
  }
  getPosition() {
    return this.position.slice();
  }
  getHead() {
    return this.position[this.position.length - 1];
  }
  getTail() {
    return this.tail;
  }
  calculateNextHeadPosition() {
    const head = this.getHead();
    const delta = this.direction.getDelta();
    return [head[0] + delta[0], head[1] + delta[1]];
  }
  move() {
    this.tail = this.position.shift();
    const headPosition = this.calculateNextHeadPosition();
    this.position.push(headPosition);
  }
  changeDirection(direction) {
    this.direction.setDirection(direction);
  }
  isFoodEaten(food) {
    const head = this.getHead();
    const foodPosition = food.getPosition();
    return head[0] == foodPosition[0] && head[1] == foodPosition[1];
  }
  grow() {
    this.position.unshift(this.tail);
  }
  touchedBorder() {
    const head = this.getHead();
    return (
      head[0] >= NUM_OF_ROWS ||
      head[0] < 0 ||
      head[1] >= NUM_OF_COLS ||
      head[1] < 0
    );
  }
  touchedItself() {
    const body = this.position.slice(0, -1); //[[0,0],[0,1]]
    const head = this.getHead(); //[0,2]
    return body.some((e) => {
      return e[0] == head[0] && e[1] == head[1];
    });
  }
}
