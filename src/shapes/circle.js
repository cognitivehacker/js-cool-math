import Canvas from '@/helper/canvas'
import graphLine from '@/helper/graph-line'

const canvas = new Canvas()
console.log('circle', canvas)

export default {
  name: "circle",
  color: '#66cdaa',
  margin: null,
  raio: 50,
  centerX: null,
  centerY: null,
  pX: null,
  pY: null,
  lineArray: [],
  maxLineArray: null,
  grau: 0,
  shape(){
    canvas.context.fillStyle = 'blueviolet'
    canvas.context.beginPath()
    canvas.context.arc(this.centerX, this.centerY, this.raio, 0, Math.PI*2, true)
    canvas.context.fill()
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

    // calc new position
    let radians = this.grau * Math.PI/180 // graus to radians
    let adjustPostion  = this.margin + this.raio // adustPosition of element on page
    this.pX = adjustPostion + ( this.raio * Math.cos(radians) ) // convert radians into coordenates
    this.pY = adjustPostion + ( this.raio * Math.sin(radians) ) // convert radians into coordenates

    this.grau++
    if(this.grau >= 360)
      this.grau = 0

  },

  loop(){
    canvas.clear('blanchedalmond')
    this.shape()
    this.perimeterLine()
    graphLine.draw(canvas.context, this.lineArray, this.maxLineArray, this.graphLineX, this.pY)
    canvas.animationFrame(this.loop.bind(this))
  },

  init(){
    graphLine.color = this.color
    window.onload = () => {
      canvas.get(this.name)
      this.margin = ( canvas.target.height - (this.raio * 2  )) / 2
      this.pX = this.margin + this.raio * 2
      this.pY = this.margin + this.raio
      this.centerX = this.margin + this.raio
      this.centerY = this.margin + this.raio
      this.graphLineX = ( this.margin * 2 ) + ( this.raio * 2 )
      this.maxLineArray = canvas.target.width - ( this.margin * 3 ) - ( this.raio * 2 )
      this.loop()
    }
    return 'started'
  }
}
