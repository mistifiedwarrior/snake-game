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
  setInterval(() => {
    controller.runGame();
  }, 200);
};

// window.onload = main;

// const snake = [[0,0],[0,1],[0,2]]
