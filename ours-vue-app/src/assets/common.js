'use strict'
function getRem(e, t) {
  var n = document.getElementsByTagName('html')[0],
    o = document.body.clientWidth || document.documentElement.clientWidth
  n.style.fontSize = (o / e) * t + 'px'
}
;(window.onload = function() {
  getRem(1080, 100)
}),
  (window.onresize = function() {
    getRem(1080, 100)
  })
