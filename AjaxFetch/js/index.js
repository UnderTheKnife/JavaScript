values = {
  users: JSON.parse(localStorage.getItem('users')),
  posts: JSON.parse(localStorage.getItem('posts')),
  comments: JSON.parse(localStorage.getItem('comments')),
  albums: JSON.parse(localStorage.getItem('albums')),
  photos: JSON.parse(localStorage.getItem('photos'))
};

/**
 * Get response from api through 'fetch'
 * @param {string} path
 */
function getResponse(path) {
  const root = 'https://jsonplaceholder.typicode.com';

  fetch(`${root}/${path}`).then(
    function (response) {
      response.json().then(
        function (data) {
          localStorage.setItem(path, JSON.stringify(data));
        });
    });
}

window.addEventListener('load', () => {

  $.each(values, (index, value) => {
    if (!value) {
      getResponse(index);
    }
  });

  user('#wall');
});
