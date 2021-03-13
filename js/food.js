class Food {
  constructor(position) {
    this.position = position;
    this.previousPosition = [0, 0];
  }
  getPosition() {
    return this.position;
  }
  getPreviousFoodPosition() {
    return this.previousPosition;
  }
  getNewPositionOfFood() {
    this.previousPosition = this.position;
    this.position = [getRandomNum(NUM_OF_ROWS), getRandomNum(NUM_OF_COLS)];
  }
}
