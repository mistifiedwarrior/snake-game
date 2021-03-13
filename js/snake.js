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
}
