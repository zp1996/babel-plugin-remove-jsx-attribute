module.exports = function() {
  return {
    name: 'remove-jsx-attribute',
    visitor: {
      JSXAttribute(path) {
        if (path.node.name.name === this.opts.attr) {
          path.remove();
        }
      }
    }
  }
};
