## mapboxGL echartLayer
Add [echarts](echarts.baidu.com/#) charts for [mapboxGL](https://github.com/mapbox/mapbox-gl-js)

In order to use this plugin, include the echartsjs andEchartsLayer.js  on your page and use it as follow:


### import

```html
  
    <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/echarts-all-3.js"></script>
    <script src='./lib/mapbox-gl-dev.js'></script>
    <link href='./lib/mapbox-gl.css' rel='stylesheet' />
    <script type="text/javascript" src="../dist/EchartsLayer.js"></script>
```

### with webpack

```js
   npm install echartLayer
```
```js
require('echarts');
require('echartLayer');
```

### how to use 


```js
option = {
  
  GLMap: {

  },

  series: [{
    name: 'pm2.5',
    type: 'scatter',
    coordinateSystem: 'GLMap',
    data: convertData(data),
    symbolSize: function (val) {
      return val[2] / 10
    },
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: false
      },
      emphasis: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        color: '#ddb926'
      }
    }
  }]
}
```

