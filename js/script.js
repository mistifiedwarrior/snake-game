const GRID_ID = 'grid';
const NUM_OF_ROWS = 60;
const NUM_OF_COLS = 80;
const getElement = (selector) => document.querySelector(selector);

const createCells = ($grid) => {
  for (let rowId = 0; rowId <= NUM_OF_ROWS; rowId++) {
    for (let colId = 0; colId < NUM_OF_COLS; colId++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.id = `cell-${colId}_${rowId}`;
      $grid.appendChild(cell);
    }
  }
};

const main = () => {
  const $grid = getElement('#grid');
  createCells($grid);
};

// window.onload = main;
