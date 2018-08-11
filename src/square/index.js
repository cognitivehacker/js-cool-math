import canvas from '@/canvas'

export default {
  name: "square",
  context: null,
  canvas: null,
  margin: null,
  shapeWidth: 100,
  shapeHeight: 100,
  centerX: null,
  centerY: null,
  pX: null,
  pY: null,
  shape(){
    this.context.fillStyle = 'green'
    this.context.fillRect(this.margin, this.margin, this.shapeWidth, this.shapeHeight)

    this.context.fillStyle = '#66cdaa';
    this.context.beginPath();
    this.context.arc(this.centerX, this.centerY, 5, 0, Math.PI*2, true)
    this.context.fill();
  },

  line(){
    this.context.beginPath()
    this.context.moveTo(this.centerX, this.centerY)
    this.context.lineTo(this.pX, this.pY)
    this.context.closePath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#66cdaa';
    this.context.stroke();
  },

  dot() {

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

    this.context.fillStyle = '#66cdaa';
    this.context.beginPath();
    this.context.arc(this.pX, this.pY, 5, 0, Math.PI*2, true)
    this.context.fill();

  },
  clear(){
    this.context.fillStyle = 'black';
    this.context.fillRect(0,0, this.canvas.width, this.canvas.height)

  },
  loop(){
    this.clear()
    this.shape()
    this.dot()
    this.line()
    canvas.animationFrame(this.loop.bind(this))
  },
  init(){
    window.onload = () => {
      this.canvas = document.getElementById(this.name)
    	this.context = this.canvas.getContext('2d')
      this.margin = ( this.canvas.height - this.shapeHeight ) / 2
      this.shapePerimeter = ( this.shapeWidth * 2 ) + ( this.shapeHeight * 2 )
      this.pX = this.margin
      this.pY = this.margin
      this.centerX = this.margin + ( this.shapeWidth / 2 )
      this.centerY = this.margin + ( this.shapeHeight / 2 )
      this.loop()
    }
  }
}
