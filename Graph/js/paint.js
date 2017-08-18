/**
 * Draw graph on canvas
 * @param {boolean} pressed
 */
function paint(pressed) {

  let canvas = document.getElementById('viewport');
  let ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawEdges(ctx, pressed);
  drawNodes(ctx, pressed);
}

/**
 * Draw edges
 * @param {object} ctx
 * @param {boolean} pressed
 */
function drawEdges(ctx, pressed) {
  let path = false;

  links.forEach((link) => {
    let i0 = link[0];
    let i1 = link[1];
    let textX = ((nodes[i0].x + nodes[i1].x) / 2) + 5;
    let textY = ((nodes[i0].y + nodes[i1].y) / 2) + 5;

    ctx.beginPath();

    if (pressed) {
      for (let node = 0; node < lastElement.path.length - 1; node += 1) {
        path = (nodes[i0].text === lastElement.path[node]
          && nodes[i1].text === lastElement.path[node + 1])
          ? true
          : path;
      }
    }

    ctx.fillStyle = defaultLinesColor;
    ctx.lineWidth = 2;
    ctx.moveTo(nodes[i0].x, nodes[i0].y);
    ctx.lineTo(nodes[i1].x, nodes[i1].y);
    ctx.strokeStyle = (path) ? minPathColor : defaultLinesColor;
    ctx.stroke();
    ctx.fillText(link[2], textX, textY);
    ctx.stroke();
    path = false;

  });
}

/**
 * Draw nodes
 * @param {object} ctx
 * @param {boolean} pressed
 */
function drawNodes(ctx, pressed) {
  let path = false;

  nodes.forEach((node) => {
    ctx.beginPath();

    if (pressed) {
      lastElement.path.forEach((element) => {
        path = (node.text === element) ? true : path;
      });
    }

    ctx.strokeStyle = defaultLinesColor;
    ctx.fillStyle = (path) ? minPathColor : defaultColor;
    ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = defaultLinesColor;
    ctx.fillText(node.text, node.x, node.y);

    if (pressed) {
      ctx.fillStyle = nodeValueColor;
      ctx.fillText(node.value, node.x + 30, node.y);
    }
    path = false;

  });
}
