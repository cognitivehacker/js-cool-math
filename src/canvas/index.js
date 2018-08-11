export default {
  animationFrame(callback){
    var requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
    function(callback){ window.setTimeout(callback, 1000/60) }
  },
}
