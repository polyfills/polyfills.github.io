
var _ = require('lodash')
var jade = require('jade')
var marked = require('marked')
var highlight = require('highlight.js')
var polyfills = require('polyfills-db').polyfills.polyfills

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})

polyfills = _.sortBy(polyfills, function (x) {
  return x.name
})

var html = jade.renderFile('lib/index.jade', {
  polyfills: polyfills
})

require('fs').writeFile('index.html', html)
