export default {
  name: "square",
  context: null,
  canvas: null,
  margin: null,
  shapeWidth: 100,
  shapeHeight: 100,
  shapePerimeter: null,
  pxStart: null,
  pyStart: null,
  pX: null,
  pY: null,
  step: 0,
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
    this.context.fillRect(this.margin, this.margin, this.shapeWidth, this.shapeHeight)

    let centerX = (this.margin + this.shapeWidth) / 2
    let centerY = (this.margin + this.shapeHeight) / 2

    //this.context.fillStyle = 'white';
    //this.context.beginPath();
    //this.context.arc(pX, pY, 5, 0, Math.PI*2, true)
    //this.context.fill();

  },
  dot(pX, pY){
    this.context.fillStyle = 'white';
    this.context.beginPath();
    this.context.arc(pX, pY, 5, 0, Math.PI*2, true)
    this.context.fill();
  },
  run() {

    let maxTop = this.margin + this.shapeWidth
    let maxRight = this.margin + this.shapeHeight
    let maxLeft = this.margin
    let maxBottom = this.margin

    switch(true){
      case this.pX < maxTop && this.pY === maxLeft:
        this.pX++
        break
      case this.pX === maxTop && this.pY < maxRight:
        this.pY++
        break
      case this.pY === maxRight && this.pX > maxLeft:
        this.pX--
        break
      case this.pX === maxLeft && this.pY > maxBottom:
        this.pY--
        break
    }

  },
  clear(){
    this.context.fillStyle = 'black';
    this.context.fillRect(0,0, this.canvas.width, this.canvas.height)

  },
  loop(){
    this.clear()
    this.shape()
    this.run()
    this.dot(this.pX, this.pY)
    this.animationFrame(this.loop.bind(this))
  },
  init(){
    window.onload = () => {
      this.canvas = document.getElementById(this.name)
    	this.context = this.canvas.getContext('2d')
      this.margin = ( this.canvas.height - this.shapeHeight ) / 2
      this.shapePerimeter = ( this.shapeWidth * 2 ) + ( this.shapeHeight * 2 )
      this.pxStart = this.pX = this.margin
      this.pyStart = this.pY = this.margin
      this.loop()
    }
  }
}
