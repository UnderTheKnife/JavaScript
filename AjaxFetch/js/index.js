let values = {
  users: JSON.parse(localStorage.getItem('users')),
  posts: JSON.parse(localStorage.getItem('posts')),
  comments: JSON.parse(localStorage.getItem('comments')),
  albums: JSON.parse(localStorage.getItem('albums')),
  photos: JSON.parse(localStorage.getItem('photos'))
};

/**
 * Sets out values
 * @param {string} path
 */
function setValues(path) {
  values[path] = JSON.parse(localStorage.getItem(path));
}

/**
 * Sets out local storage
 * @param {string} path
 * @param {string} data
 */
function setLocalStorage(path, data) {
  localStorage.setItem(path, JSON.stringify(data));
  setValues(path);
}

/**
 * Gets errors
 * @param {object} error
 */
function getError(error) {
  alert(error);
}
/**
 * Gets response from api through 'fetch'
 * @param {string} path
 */
function getResponse(path) {
  const root = 'https://jsonplaceholder.typicode.com';

  fetch(`${root}/${path}`)
    .then(response =>response.json())
    .then(data =>setLocalStorage(path, data))
    .catch(error => getError(error));
}

/**
 * Adds load event
 */
window.addEventListener('load', () => {

  $.each(values, (index, value) => {
    setValues(index);
    if (!value) {
      getResponse(index);
    }
  });

  user('#wall');
});
