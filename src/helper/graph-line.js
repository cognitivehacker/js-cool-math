export default {
  color:'white',
  draw(context, lineArray, maxLineArray, graphLineX, pY ){
    lineArray.unshift(pY)

    if( lineArray.length > maxLineArray )
      lineArray.pop()

    let groupIndex = 0

    for ( let index = 0 ; index < lineArray.length; index++ ){
      context.fillStyle = this.color
      context.beginPath()
      context.arc(graphLineX + index, lineArray[index], 2, 0, Math.PI*2, true)
      context.fill()
      context.closePath()
    }
  }
}
