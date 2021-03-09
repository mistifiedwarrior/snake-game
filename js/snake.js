class Snake {
  constructor(position) {
    this.position = position;
    this.tail = [0, 0];
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
  move() {
    this.tail = this.position.shift();
    const head = this.getHead();
    this.position.push([head[0], head[1] + 1]);
  }
}
