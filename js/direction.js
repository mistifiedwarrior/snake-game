const Direction = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',

  getDelta: (direction) => {
    if (direction === 'RIGHT') {
      return [0, 1];
    }
    if (direction === 'LEFT') {
      return [0, -1];
    }
    if (direction === 'UP') {
      return [-1, 0];
    }
    if (direction === 'DOWN') {
      return [1, 0];
    }
  },
};
