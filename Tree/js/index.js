/**
 * Clear tree and build again
 */
function clearAndBuild() {
  $('.tree').empty();

  elements.forEach(
    element => max = element.level > max ? element.level : max
  );

  building();
}

/**
 * Cleans the tree and rebuild
 * @param {number} currentLevel
 * @param {string} parent
 */
function building(currentLevel, parent) {
  currentLevel = currentLevel || 0;
  parent = parent || 'tree';

  elements.forEach((element) => {
    if (element.level === currentLevel && parent === element.parentId) {
      const ul = $('<ul/>');
      const li = $('<li/>');
      const content = $('<div/>');
      const arrow = $('<div/>');
      const image = $('<div/>');
      const name = $('<div/>').text(element.name);

      ul.addClass('opened');
      ul.addClass(element.id);
      content.addClass(`${element.type}`);

      name.addClass('name');
      image.addClass(`${element.type}-image image`);
      arrow.addClass(`${element.type}-open image toggle`);
      arrow.addClass(`${element.id}-toggle`);

      arrow.data('id', element.id);
      arrow.data('type', element.type);
      name.data('element', element);

      content.append(arrow, image, name);
      li.append(content, ul);

      if ($(`.${parent}`).is('ul')) {
        $(`.${element.parentId}`).append(li);
      } else {
        ul.append(li);
        $(`.${element.parentId}`).append(ul);
      }

      if ((currentLevel) < max) {
        building(currentLevel + 1, element.id);
      }
    }
  });
}

/**
 * Adds new element
 * @param {string} type
 */
function addElement(type) {
  let newItem = {
    id: `x${elements.length}`,
    level: 0,
    name: type,
    parentId: '',
    type: type.toLowerCase()
  };

  if (currentItem) {
    if (currentItem.type === 'folder') {
      newItem.level = currentItem.level + 1;
      newItem.parentId = currentItem.id;
    }

    if (currentItem.type === 'file') {
      newItem.level = currentItem.level;
      newItem.parentId = currentItem.parentId;
    }
    elements.push(newItem);
  }
  clearAndBuild();
}

/**
 * Deletes selected element
 * @param {object} item
 */
function deleteElement(item) {
  elements.forEach((element) => {
    let index = 0;

    if (element.id === item.id) {
      index = elements.indexOf(element);
      elements.splice(index, 1);
    }

    if (element.parentId === item.id) {
      deleteElement(element);
    }
  });
  clearAndBuild();
}

/**
 * Adds events on buttons
 */
$(document).ready(() => {
  clearAndBuild();
});

$(document).on('click', '#addFile', () => {
  addElement('File')
});

$(document).on('click', '#addFolder', () => {
  addElement('Folder')
});

$(document).on('click', '#delete', () => {
  deleteElement(currentItem);
});

$(document).on('click', `.toggle`, function() {
  const element = $(this).data();
  $(this).toggleClass(`${element.type}-closed`);
  $(`.${element.id}`).toggleClass(`closed`);
});

$(document).on('click', '.name', function() {
  currentItem = $(this).data('element');
});

