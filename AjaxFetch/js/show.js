/**
 * Show users
 * @param {string} parent
 */
function user(parent) {
  $.each(values.users, (userId, user) => {
    const posts = $(`<div/>`).hide();
    const albums = $(`<div/>`).hide();
    const userName = $('<h2/>').addClass('well').text(user.name);

    userName.click(() => {
      posts.toggle();
      albums.toggle();
    });

    post(posts, user.id);
    album(albums, user.id);
    $(parent).append(userName, posts, albums);
  });
}

/**
 * Show user posts
 * @param {string} parent
 * @param {number} parentId
 */
function post(parent, parentId) {
  const allPosts = $('<h3/>').text('Posts');
  const posts = $('<div/>').hide();

  $.each(values.posts, (postId, post) => {
    if (post.userId === parentId) {
      const postBlock = $('<div/>').addClass('well post');

      $(postBlock).append(
        $('<h3/>').text(post.title),
        $('<p/>').text(post.body)
      );

      comment(postBlock, post.id);
      $(posts).append(postBlock);
    }
  });

  allPosts.click(() => posts.toggle());
  $(parent).append(allPosts, posts);
}

/**
 * Show user post comments
 * @param {string} parent
 * @param {number}parentId
 */
function comment(parent, parentId) {
  $.each(values.comments, (commentId, comment) => {
    const comments = $('<div/>').addClass('well comment');

    if (comment.postId === parentId) {

      $(comments).append(
        $('<h3/>').text(comment.name),
        $('<p/>').text(comment.email),
        $('<p/>').text(comment.body)
      );
      $(parent).append(comments);
    }
  });
}

/**
 * Show user albums
 * @param {string} parent
 * @param {number} parentId
 */
function album(parent, parentId) {
  const allAlbums = $('<h3/>').text('Albums');
  const albums = $('<div/>').hide();

  $.each(values.albums, (albumId, album) => {
    if (album.userId === parentId) {
      const albumBlock = $('<div/>').addClass('well');

      $(albumBlock).append(
        $('<h3/>').text(album.title)
      );

      photo(albumBlock, album.id);

      $(albums).append(albumBlock);
    }
  });

  allAlbums.click(() => albums.toggle());
  $(parent).append(allAlbums, albums);
}

/**
 * Show user album photos
 * @param {string} parent
 * @param {number} parentId
 */
function photo(parent, parentId) {
  $.each(values.photos, (photoId, photo) => {

    if (photo.albumId === parentId) {
      const img = $('<img>');
      img.attr('src', photo.thumbnailUrl);
      img.attr('title', photo.title);

      $(parent).append(img);
    }
  });
}