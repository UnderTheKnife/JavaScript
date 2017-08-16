/**
 * Search minimum value of nodes
 */
function searchMin() {
  for (let i = 0; i < nodes.length; i += 1) {
    let min = Infinity;
    let id = 0;

    for (let el = 0; el < nodes.length; el += 1) {

      if (nodes[el].value < min && !nodes[el].used) {
        min = nodes[el].value;
        id = el;
      }

    }
    nodes[id].used = true;

    searchPath(id);
    paint(true);

  }

}

/**
 * Search for the minimum path to nodes
 * @param id
 */
function searchPath(id) {
  links.forEach((edge) => {

    if (edge[0] === id) {
      let x = nodes[id].value + edge[2];

      if (x < nodes[edge[1]].value) {
        nodes[edge[1]].value = x;
        nodes[edge[1]].path = nodes[id].path.concat((edge[1] + 1).toString());
      }

    }

  });
}

/**
 * Load event create
 */
window.addEventListener('load', () => {
  paint();
  $('#clear').on('click', () => {
    paint(false);
  });
  $('#search').on('click', searchMin);
});
