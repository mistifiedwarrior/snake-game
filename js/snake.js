class Snake {
  constructor(position) {
    this.position = position;
  }
  getPosition() {
    return this.position.slice();
  }
}
