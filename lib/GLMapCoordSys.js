define(function (require) {
  var echarts = require('echarts')

  function GLMapCoordSys (GLMap, api) {
    this._GLMap = GLMap
    this.dimensions = ['lng', 'lat']
    this._mapOffset = [0, 0]

    this._api = api
  }

  GLMapCoordSys.prototype.dimensions = ['lng', 'lat']

  GLMapCoordSys.prototype.setMapOffset = function (mapOffset) {
    this._mapOffset = mapOffset
  }

  GLMapCoordSys.prototype.getBMap = function () {
    return this._GLMap
  }

  GLMapCoordSys.prototype.dataToPoint = function (data) {
    var px = this._GLMap.project(data)

    var mapOffset = this._mapOffset

    return [px.x - mapOffset[0], px.y - mapOffset[1]]
  }

  GLMapCoordSys.prototype.pointToData = function (pt) {
    var mapOffset = this._mapOffset
    var pt = this._bmap.project(
      [ pt[0] + mapOffset[0],
        pt[1] + mapOffset[1]]
    )
    return [pt.lng, pt.lat]
  }

  GLMapCoordSys.prototype.getViewRect = function () {
    var api = this._api
    return new echarts.graphic.BoundingRect(0, 0, api.getWidth(), api.getHeight())
  }

  GLMapCoordSys.prototype.getRoamTransform = function () {
    return echarts.matrix.create()
  }


  // For deciding which dimensions to use when creating list data
  GLMapCoordSys.dimensions = GLMapCoordSys.prototype.dimensions

  GLMapCoordSys.create = function (ecModel, api) {
    var coordSys;
   
    ecModel.eachComponent('GLMap', function (GLMapModel) {
      var viewportRoot = api.getZr().painter.getViewportRoot()
      var GLMap = echarts.glMap;
      coordSys = new GLMapCoordSys(GLMap, api)
      coordSys.setMapOffset(GLMapModel.__mapOffset || [0, 0])
      GLMapModel.coordinateSystem = coordSys
    })

    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'GLMap') {
        seriesModel.coordinateSystem = coordSys
      }
    })
  }

  return GLMapCoordSys
})
