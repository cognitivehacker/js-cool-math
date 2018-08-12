export default class Canvas {
  constructor(){
    this.target = null
    this.context = null
  }
  get(name){
    this.target = document.getElementById(name)
    this.context = this.target.getContext('2d')
  }
  animationFrame(callback){
    var requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
    function(callback){ window.setTimeout(callback, 1000/60) }
  }
  clear(color){
    this.context.fillStyle = color
    this.context.fillRect(0,0, this.target.width, this.target.height)
  }

}
