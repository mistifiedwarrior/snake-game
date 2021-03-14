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
  const directions = {
    ArrowUp: () => controller.changeDirection(UP),
    ArrowDown: () => controller.changeDirection(DOWN),
    ArrowLeft: () => controller.changeDirection(LEFT),
    ArrowRight: () => controller.changeDirection(RIGHT),
  };
  document.body.onkeydown = function (e) {
    const key = e.key;
    if (Object.keys(directions).includes(key)) directions[key]();
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
