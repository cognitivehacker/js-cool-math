import Canvas from '@/helper/canvas'
import graphLine from '@/helper/graph-line'

const canvas = new Canvas()
console.log('square', canvas)

export default {
  name: "square",
  color: '#66cdaa',
  context: null,
  canvas: null,
  margin: null,
  shapeWidth: 100,
  shapeHeight: 100,
  centerX: null,
  centerY: null,
  pX: null,
  pY: null,
  lineArray: [],
  maxLineArray: null,

  shape(){
    canvas.context.fillStyle = 'green'
    canvas.context.fillRect(this.margin, this.margin, this.shapeWidth, this.shapeHeight)
  },

  perimeterLine() {

    // create perimeter dot
    canvas.context.fillStyle = this.color
    canvas.context.beginPath()
    canvas.context.arc(this.pX, this.pY, 5, 0, Math.PI*2, true)
    canvas.context.fill()

    // crate center dot
    canvas.context.fillStyle = this.color
    canvas.context.beginPath()
    canvas.context.arc(this.centerX, this.centerY, 5, 0, Math.PI*2, true)
    canvas.context.fill()

    // create line between perimeter dot and center dot
    canvas.context.beginPath()
    canvas.context.moveTo(this.centerX, this.centerY)
    canvas.context.lineTo(this.pX, this.pY)
    canvas.context.closePath()
    canvas.context.lineWidth = 5
    canvas.context.strokeStyle = this.color
    canvas.context.stroke()

    //Calc perimeter position
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

  loop(){
    canvas.clear('black')
    this.shape()
    this.perimeterLine()
    graphLine.draw(canvas.context, this.lineArray, this.maxLineArray, this.graphLineX, this.pY)
    canvas.animationFrame(this.loop.bind(this))
  },

  init(){
    graphLine.color = this.color
    window.onload = () => {
      canvas.get(this.name)
      this.margin = ( canvas.target.height - this.shapeHeight ) / 2
      this.shapePerimeter = ( this.shapeWidth * 2 ) + ( this.shapeHeight * 2 )
      this.pX = this.margin
      this.pY = this.margin
      this.centerX = this.margin + ( this.shapeWidth / 2 )
      this.centerY = this.margin + ( this.shapeHeight / 2 )
      this.graphLineX = ( this.margin * 2 ) + this.shapeWidth
      this.maxLineArray = canvas.target.width - ( this.margin * 3 ) - this.shapeWidth
      this.loop()
    }
    return 'started'
  }
}
