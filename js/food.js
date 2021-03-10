class Food {
  constructor(position) {
    this.position = position;
  }
  getPosition() {
    return this.position;
  }
  getNewPositionOfFood() {
    const position = [getRandomNum(NUM_OF_ROWS), getRandomNum(NUM_OF_COLS)];
    return new Food(position);
  }
}
