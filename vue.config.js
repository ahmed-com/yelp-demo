module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/yelp-demo/'
      : '/'
  }

  // git subtree push --prefix dist origin gh-pages