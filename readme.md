## mapboxGL echartslayer
Add [echarts](https://github.com/ecomfe/echarts) charts to  [mapboxGL](https://github.com/mapbox/mapbox-gl-js) as a layer

In order to use this plugin, include the echartsjs andEchartsLayer.js  on your page and use it as follow:

### demo

[全球航线](https://lzxue.github.io/echartsLayer/demo/lines-airline.html)

[全国空气质量](https://lzxue.github.io/echartsLayer/demo/effectScatter-map.html)

[模拟迁徙](https://lzxue.github.io/echartsLayer/demo/geo-line.html)

[微博签到](https://lzxue.github.io/echartsLayer/demo/scatter-weibo.html)


### import

```html
    <script type="text/javascript" src="./echarts-all-3.js"></script>
    <script type="text/javascript" src="../dist/EchartsLayer.js"></script>
```

### with webpack

```js
npm install echartslayer
```
```js
require('echarts');
var EchartLayer=require('echartslayer');

var echartslayer = new EchartsLayer(map);
echartslayer.chart.setOption(option);
//移除 
echartslayer.remove();

```

### Usage

set the charts attribute coordinateSystem:"GLMap"

```js
option = { 
  GLMap: { //Must

  },
  series: [{
    coordinateSystem: 'GLMap',
  }]
}
```

