export type TetrominoShape = {
  shape: number[][][];
  color: string;
  type: string;
};

export const TETROMINO_SHAPES: TetrominoShape[] = [
  {
    type: "I",
    shape: [
      [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ],
      [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
    ],
    color: "cyan",
  },
  {
    type: "J",
    shape: [
      [
        [2, 0, 0],
        [2, 2, 2],
        [0, 0, 0],
      ],
      [
        [0, 2, 2],
        [0, 2, 0],
        [0, 2, 0],
      ],
      [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2],
      ],
      [
        [0, 2, 0],
        [0, 2, 0],
        [2, 2, 0],
      ],
    ],
    color: "blue",
  },
  {
    type: "L",
    shape: [
      [
        [0, 0, 3],
        [3, 3, 3],
        [0, 0, 0],
      ],
      [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
      ],
      [
        [0, 0, 0],
        [3, 3, 3],
        [3, 0, 0],
      ],
      [
        [3, 3, 0],
        [0, 3, 0],
        [0, 3, 0],
      ],
    ],
    color: "orange",
  },
  {
    type: "O",
    shape: [
      [
        [0, 4, 4],
        [0, 4, 4],
        [0, 0, 0],
      ],
    ],
    color: "yellow",
  },
  {
    type: "S",
    shape: [
      [
        [0, 5, 5],
        [5, 5, 0],
        [0, 0, 0],
      ],
      [
        [0, 5, 0],
        [0, 5, 5],
        [0, 0, 5],
      ],
      [
        [0, 0, 0],
        [0, 5, 5],
        [5, 5, 0],
      ],
      [
        [5, 0, 0],
        [5, 5, 0],
        [0, 5, 0],
      ],
    ],

    color: "green",
  },
  {
    type: "T",
    shape: [
      [
        [0, 6, 0],
        [6, 6, 6],
        [0, 0, 0],
      ],
      [
        [0, 6, 0],
        [0, 6, 6],
        [0, 6, 0],
      ],
      [
        [0, 0, 0],
        [6, 6, 6],
        [0, 6, 0],
      ],
      [
        [0, 6, 0],
        [6, 6, 0],
        [0, 6, 0],
      ],
    ],
    color: "purple",
  },
  {
    type: "Z",
    shape: [
      [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
      ],
      [
        [0, 0, 7],
        [0, 7, 7],
        [0, 7, 0],
      ],
      [
        [0, 0, 0],
        [7, 7, 0],
        [0, 7, 7],
      ],
      [
        [0, 7, 0],
        [7, 7, 0],
        [7, 0, 0],
      ],
    ],
    color: "red",
  },
];
