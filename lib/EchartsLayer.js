function EchartsLayer (map) {
  var mapContainer = map.getCanvasContainer()
  this._container = document.createElement('div')
  this._container.style.width = map.getCanvas().style.width
  this._container.style.height = map.getCanvas().style.height
  this._container.setAttribute('id', 'echarts')
  this._container.setAttribute('class', 'echartMap')
  this._map = map
  mapContainer.appendChild(this._container)
  this.chart = echarts.init(this._container)
  echarts.glMap = map
  this.resize()
}
EchartsLayer.prototype.remove = function () {
  this._container.parentNode.removeChild(this._container)
  this._map = undefined
}
EchartsLayer.prototype.resize = function () {
  var me = this
  window.onresize = function () {
    me._container.style.width = me._map.getCanvas().style.width
    me._container.style.height = me._map.getCanvas().style.height
    me.chart.resize()
  }
}
module.exports=EchartsLayer;
