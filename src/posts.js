const postsContext = require.context('../docs', true, /^\.\/.*\.post\.md$/);
const loaded = postsContext.keys().map(e => postsContext(e));
console.log(loaded);

class Posts {
  static list() {
    return loaded;
  }
}

export default Posts;
