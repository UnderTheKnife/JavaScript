/**
 * show users
 * @param {string} parent
 */
function user(parent) {
  $.each(values.users, (userId, user) => {
    let posts = $(`<div style="display: none"></div>`);
    let albums = $(`<div style="display: none"></div>`);
    let userName = $(`<h2 class="well">${user.name}</h2>`);

    userName.click(() => {
      posts.toggle();
      albums.toggle();
    });

    post(posts, user.id);
    album(albums, user.id);
    $(parent).append(userName, posts, albums)
  });
}

/**
 *  show user posts
 * @param {string} parent
 * @param {number} parentId
 */
function post(parent, parentId) {
  let allPosts = $('<h3>Posts</h3>');
  let posts = $('<div style="display: none"></div>');

  $.each(values.posts, (postId, post) => {
    if (post['userId'] === parentId) {
      let postBlock = $('<div class="well post"></div>');

      $(postBlock).append(
        `<h3>${post.title}</h3>
          <p>${post.body}</p>`
      );

      comment(postBlock, post['id']);
      $(posts).append(postBlock)
    }
  });

  allPosts.click(() => posts.toggle());
  $(parent).append(allPosts, posts);
}

/**
 * show user post comments
 * @param {string} parent
 * @param {number}parentId
 */
function comment(parent, parentId) {
  $.each(values.comments, (commentId, comment) => {
    let comments = $(`<div class="well comment"></div>`);

    if (comment['postId'] === parentId) {

      $(comments).append(
        `<h3>${comment['name']}</h3>
        <p>${comment['email']}</p>
        <p>${comment['body']}</p>`
      );
      $(parent).append(comments)
    }
  });
}

/**
 * show user albums
 * @param {string} parent
 * @param {number} parentId
 */
function album(parent, parentId) {
  let allAlbums = $('<h3>Albums</h3>');
  let albums = $('<div style="display: none"></div>');

  $.each(values.albums, (albumId, album) => {
    if (album['userId'] === parentId) {
      let albumBlock = $('<div class="well"></div>');

      $(albumBlock).append(
        `<h3>${album['title']}</h3>`
      );

      photo(albumBlock, album['id']);

      $(albums).append(albumBlock)
    }
  });

  allAlbums.click(() => albums.toggle());
  $(parent).append(allAlbums, albums);
}

/**
 * show user album photos
 * @param {string} parent
 * @param {number} parentId
 */
function photo(parent, parentId) {
  $.each(values.photos, (photoId, photo) => {

    if (photo['albumId'] === parentId) {
      let img = $(`<img 
        src="${photo['thumbnailUrl']}"
        alt="${photo['title']}"
        title="${photo['title']}
        ">`
      );

      $(parent).append(img)
    }
  });
}