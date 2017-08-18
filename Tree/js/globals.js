currentItem = '';
elements = [
  {
    id: 'tree0',
    level: 0,
    name: 'Root',
    parentId: 'tree',
    type: 'folder'
  },
  {
    id: 'tree1',
    level: 0,
    name: 'Root',
    parentId: 'tree',
    type: 'folder'
  },
  {
    id: 'tree2',
    level: 1,
    name: 'Folder',
    parentId: 'tree0',
    type: 'folder'
  },
  {
    id: 'tree3',
    level: 1,
    name: 'Folder',
    parentId: 'tree1',
    type: 'folder'
  },
  {
    id: 'tree4',
    level: 2,
    name: 'Folder',
    parentId: 'tree3',
    type: 'folder'
  }, {
    id: 'tree5',
    level: 2,
    name: 'File',
    parentId: 'tree3',
    type: 'file'
  }, {
    id: 'tree6',
    level: 3,
    name: 'File',
    parentId: 'tree4',
    type: 'file'
  }, {
    id: 'tree7',
    level: 2,
    name: 'File',
    parentId: 'tree2',
    type: 'file'
  }
];
max = 0;
elements.forEach((element) => {
  if (element.level > max) {
    max = element.level;
  }
});
