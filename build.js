/* eslint-disable no-console */
require('babel-core/register');
var Metalsmith = require('metalsmith');
var reactTemplate = require('metalsmith-react-templates').default;
var babelConfig = require('./babelrc.json');

new Metalsmith(__dirname)
  .source('./src')
  .clean(true)
  .use(reactTemplate({
    isStatic: true,
    directory: './template',
    defaultTemplate: 'default.jsx',
    pattern: '**/*.jsx',
    tooling: babelConfig
  }))
  .destination('./build')
  .build(function(err) {
    if (err) {
      throw err;
    }
  });
