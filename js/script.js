const attachEventListener = (controller) => {
  document.body.onkeydown = function (e) {
    if (e.key === 'ArrowUp') {
      controller.changeDirection(Direction.UP);
    }
    if (e.key === 'ArrowDown') {
      controller.changeDirection(Direction.DOWN);
    }
    if (e.key === 'ArrowLeft') {
      controller.changeDirection(Direction.LEFT);
    }
    if (e.key === 'ArrowRight') {
      controller.changeDirection(Direction.RIGHT);
    }
  };
};

const main = () => {
  const $grid = getElement('#grid');
  const snake = new Snake([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  const food = new Food([25, 25]);
  const game = new Game(snake, food);
  const presenter = new Presenter($grid, game);
  const controller = new Controller(presenter, game);
  controller.start();
  attachEventListener(controller);
  setInterval(() => {
    controller.runGame();
  }, 200);
};

// window.onload = main;

// const snake = [[0,0],[0,1],[0,2]]
