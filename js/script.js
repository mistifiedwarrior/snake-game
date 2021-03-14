const addButtonListener = function (controller, id, direction) {
  const $button = getElement(id);
  $button.addEventListener('click', (e) => {
    controller.changeDirection(direction);
  });
};

const attachEventListener = (controller) => {
  addButtonListener(controller, '#up', UP);
  addButtonListener(controller, '#down', DOWN);
  addButtonListener(controller, '#left', LEFT);
  addButtonListener(controller, '#right', RIGHT);

  document.body.onkeydown = function (e) {
    if (e.key === 'ArrowUp') {
      controller.changeDirection(UP);
    }
    if (e.key === 'ArrowDown') {
      controller.changeDirection(DOWN);
    }
    if (e.key === 'ArrowLeft') {
      controller.changeDirection(LEFT);
    }
    if (e.key === 'ArrowRight') {
      controller.changeDirection(RIGHT);
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
  const food = new Food([0, 15]);
  const game = new Game(snake, food);
  const presenter = new Presenter($grid, game);
  const controller = new Controller(presenter, game);
  controller.start();
  attachEventListener(controller);
  const timerID = setInterval(() => {
    if (controller.hasGameEnded()) {
      clearInterval(timerID);
      controller.endGame();
    }
    controller.runGame();
  }, 200);
};
