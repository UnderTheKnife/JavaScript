/**
 * get response from api
 * @param {string} path
 */
function getResponse(path) {
  const root = 'https://jsonplaceholder.typicode.com';

  $.get({
    url: `${root}/${path}`,
    method: 'GET'
  }).then(function (data) {
    localStorage.setItem(path, JSON.stringify(data));

  });
}

window.addEventListener('load',() => {
  window.values = {
    users: JSON.parse(localStorage.getItem('users')),
    posts: JSON.parse(localStorage.getItem('posts')),
    comments: JSON.parse(localStorage.getItem('comments')),
    albums: JSON.parse(localStorage.getItem('albums')),
    photos: JSON.parse(localStorage.getItem('photos'))
  };

  $.each(window.values, (index, value) => {
    if (value === null) {
      getResponse(index);
    }
  });

  user('#wall');

});
