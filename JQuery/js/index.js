let values = {
  users: JSON.parse(localStorage.getItem('users')),
  posts: JSON.parse(localStorage.getItem('posts')),
  comments: JSON.parse(localStorage.getItem('comments')),
  albums: JSON.parse(localStorage.getItem('albums')),
  photos: JSON.parse(localStorage.getItem('photos'))
};
/**
 * get response from api
 * @param {string} path
 */
function getResponse(path) {
  const root = 'https://jsonplaceholder.typicode.com';

  $.get(`${root}/${path}`, (data) => {
    localStorage.setItem(path, JSON.stringify(data));
  });
}

window.addEventListener('load',() => {
  $.each(values, (index, value) => {
    if (value === null) {
      getResponse(index);
    }
  });

  user('#wall');
});
