/**
 * Clear tree and build again
 */
function clearAndBuild() {
  $('.tree').empty();
  building();
}

/**
 * Cleans the tree and rebuild
 * @param {number} currentLevel
 * @param {string} parent
 */
function building(currentLevel, parent) {
  currentLevel = (currentLevel) ? currentLevel : 0;
  parent = (parent) ? parent : 'tree';

  elements.forEach((element) => {
    if (element.level === currentLevel && parent === element.parentId) {
      let ul = $('<ul/>');
      let li = $('<li/>');
      let content = $('<div/>');
      let arrow = $('<div/>');
      let image = $('<div/>');
      let name = $('<div/>').text(element.name);

      ul.addClass('opened');
      ul.addClass(`${element.id}`);
      content.addClass(`${element.type}`);
      name.addClass('name');
      image.addClass(`${element.type}-image image`);
      arrow.addClass(`${element.type}-open image toggle`);
      arrow.addClass(`${element.id}-toggle`);

      content.append(arrow, image, name);
      li.append(content, ul);

      if ($(`.${parent}`).is('ul')) {
        $(`.${element.parentId}`).append(li);
      } else {
        ul.append(li);
        $(`.${element.parentId}`).append(ul);
      }

      $(`.${element.id}-toggle`).on('click', () => {
        let hide = $(`.${element.id}`);
        arrow.toggleClass(`${element.type}-open`);
        arrow.toggleClass(`${element.type}-closed`);
        hide.toggleClass('opened');
        hide.toggleClass('closed');
      });
      content.on('click', () => {
        currentItem = element;
      });

      if ((currentLevel + 1) <= max) {
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
  $('#addFile').on('click', () => {
    addElement('File')
  });
  $('#addFolder').on('click', () => {
    addElement('Folder')
  });
  $('#delete').on('click', () => {
    deleteElement(currentItem);
  });
});
