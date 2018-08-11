export default {
  name: "square",
  context: null,
  canvas: null,
  animationFrame(callback){
    var requestAnimationFrame = window.requestAnimationFrame(callback) ||
      window.webkitRequestAnimationFrame(callback) ||
      window.mozRequestAnimationFrame(callback) ||
      window.oRequestAnimationFrame(callback) ||
      window.msRequestAnimationFrame(callback) ||
    function(callback){ window.setTimeout(callback, 1000/60) }
  },
  shape(){
    this.context.fillStyle = 'green'
    this.context.fillRect(100,100, 100, 100)
  },
  dot(pX, pY){
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(pX, pY, 5, 0,Math.PI*2,true);
    this.context.fill();
  },
  clear(){
    this.context.fillStyle = 'black';
    this.context.fillRect(0,0, this.canvas.width, this.canvas.height)
  },
  loop(){
    this.clear()
    this.shape()
    this.dot(50, 100)
  },
  init(){
    window.onload = () => {
      this.canvas = document.getElementById('gameCanvas')
    	this.context = this.canvas.getContext('2d')
      this.animationFrame(this.loop.bind(this))
    }
  }
}
