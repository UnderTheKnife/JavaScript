// Info about nodes
let nodes = [
  {
    x: 500,
    y: 50,
    text: '1',
    value: 0,
    used: false,
    path: ['1']
  },
  {
    x: 500,
    y: 150,
    text: '2',
    value: Infinity,
    used: false,
    path: []
  },
  {
    x: 400,
    y: 250,
    text: '3',
    value: Infinity,
    used: false,
    path: []
  },
  {
    x: 500,
    y: 350,
    text: '4',
    value: Infinity,
    used: false,
    path: []
  },
  {
    x: 600,
    y: 450,
    text: '5',
    value: Infinity,
    used: false,
    path: []
  },
  {
    x: 600,
    y: 550,
    text: '6',
    value: Infinity,
    used: false,
    path: []
  }
];

// Dependencies of nodes
let links = [
  [0, 1, 2],
  [1, 2, 4],
  [1, 3, 8],
  [1, 4, 15],
  [2, 3, 3],
  [3, 4, 4],
  [4, 5, 5],
];

// Colors
let defaultColor = '#99ccff';
let defaultLinesColor = '#000';
let minPathColor = '#00CC00';
let nodeValueColor = '#cc0000';
let lastElement = nodes[Object.keys(nodes)[nodes.length - 1]];
