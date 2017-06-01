const postsContext = require.context('../docs', true, /^\.\/.*\.post\.md$/);
const loaded = postsContext.keys().map(e => Object.assign({}, postsContext(e), { file: /^\.?\/?(.*?)\.post\.md/.exec(e)[1] }));

class Posts {
  static list() {
    return loaded;
  }

  static find(name) {
    return loaded.find(post => post.file === name);
  }
}

export default Posts;
