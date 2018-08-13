export default {

  target: null,
  context: null,
  width: null,
  height: null,
  elements: null,
  margin: 25,
  init(id, type, elements){

    this.elements = elements
    this.target = document.getElementById(id)
    this.context = this.target.getContext(type)

    this.width = this.target.width
    this.height = this.target.height = 150 * elements.length
    this.clear()

  },

  loop(){

  },

  animationFrame(callback){
    var requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
    function(callback){ window.setTimeout(callback, 1000/60) }
  },

  clear(color){
    this.context.fillStyle = color || 'blue'
    this.context.fillRect(0,0, this.width, this.height)
  },

}
