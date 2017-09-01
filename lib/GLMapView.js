define(function (require) {
  return require('echarts').extendComponentView({
    type: 'GLMap',

    render: function (GLMapModel, ecModel, api) {
      var rendering = true

      var glMap = echarts.glMap


      var viewportRoot = api.getZr().painter.getViewportRoot()
      var coordSys = GLMapModel.coordinateSystem
      var moveHandler = function (type, target) {
        if (rendering) {
          return
        }
        // var offsetEl = viewportRoot.parentNode.parentNode.parentNode
        var offsetEl = document.getElementsByClassName('mapboxgl-map')[0];

        var mapOffset = [
          -parseInt(offsetEl.style.left, 10) || 0,
          -parseInt(offsetEl.style.top, 10) || 0
        ]
        viewportRoot.style.left = mapOffset[0] + 'px'
        viewportRoot.style.top = mapOffset[1] + 'px'

        coordSys.setMapOffset(mapOffset)
        GLMapModel.__mapOffset = mapOffset

        api.dispatchAction({
          type: 'GLMapRoam'
        })
      }

      function zoomEndHandler () {
        if (rendering) {
          return
        }
        api.dispatchAction({
          type: 'GLMapRoam'
        })
      }

      glMap.off('move', this._oldMoveHandler)
      // FIXME
      // Moveend may be triggered by centerAndZoom method when creating coordSys next time
      // glMap.removeEventListener('moveend', this._oldMoveHandler)
      glMap.off('zoomend', this._oldZoomEndHandler)
      glMap.on('move', moveHandler)
      // glMap.addEventListener('moveend', moveHandler)
      glMap.on('zoomend', zoomEndHandler)

      this._oldMoveHandler = moveHandler
      this._oldZoomEndHandler = zoomEndHandler

      var roam = GLMapModel.get('roam')
      if (roam && roam !== 'scale') {
        // todo 允许拖拽
      }else {
        // todo 不允许拖拽
      }
      if (roam && roam !== 'move') {
        // todo 允许移动
      }else {
        // todo 不允许允许移动
      }



      rendering = false
    }
  })
})
