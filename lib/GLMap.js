/**
 * GLMap component extension
 */
define(function (require) {
  require('echarts').registerCoordinateSystem(
    'GLMap', require('./GLMapCoordSys')
  )
  require('./GLMapModel')
  require('./GLMapView')

  // Action
  require('echarts').registerAction({
    type: 'GLMapRoam',
    event: 'GLMapRoam',
    update: 'updateLayout'
  }, function (payload, ecModel) {})

  return {
    version: '1.0.0'
  }
})


