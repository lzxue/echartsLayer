type TextAlign = 'left' | 'center' | 'right'
type TextBaseline = 'top' | 'bottom' | 'middle'
type LeftAndRight = 'left' | 'center' | 'right' | string | number
type TopAndBottom = 'top' | 'middle' | 'bottom' | string | number
type Color = string
type Orient = 'horizontal' | 'vertical'
type Icon = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string

interface StyleCommon {
    shadowOffsetX?: number
    shadowOffsetY?: number
    shadowBlur?: number
    shadowColor?: Color
}

interface ItemStyle extends StyleCommon {
    color?: Color
    borderColor?: Color
    borderWidth?: string
    borderType?: string
    opacity?: number
}

interface LineStyle extends StyleCommon {
    color?: Color
    width?: number
    opacity?: number
}

interface AreaStyle extends StyleCommon {
    color?: Color
    opacity?: number
}

interface TextStyle {
    color?: Color
    fontStyle?: string
    fontFamily?: string
    fontWeight?: string
    fontSize: number
}

////////// Title
interface TitleOption extends StyleCommon {
    show?: boolean

    text?: string
    link?: string
    target?: string
    textStyle?: TextStyle

    subtext?: string
    sublink?: string
    subtarget?: string
    subtextStyle?: TextStyle

    textAlign?: string
    textBaseline?: string

    padding?: number
    itemGap?: number

    backgroundColor?: Color
    borderColor?: Color
    borderWidth?: number

    zlevel?: number
    z?: number
    left?: LeftAndRight
    right?: LeftAndRight
    top?: TopAndBottom
    botom?: TopAndBottom
}

////////// Legend
type LegenOptionFormatter = (name: string) => string
interface LegendDataItem {
    name: string
    icon?: Icon
    textStyle?: TextStyle
}
interface LegendOption extends StyleCommon {
    show?: boolean

    orient?: Orient
    align?: TextAlign

    padding?: number
    itemGap?: number
    itemWidth?: number
    itemHeight?: number

    formatter?: LegenOptionFormatter | string

    selectedMode?: 'single' | 'multiple' | boolean

    inactiveColor?: string

    selected?: Object

    textStyle?: Object

    data: Array<LegendDataItem | string>

    backgroundColor?: Color
    borderColor?: Color
    borderWidth?: number

    zlevel?: number
    z?: number
    left?: LeftAndRight
    right?: LeftAndRight
    top?: TopAndBottom
    botom?: TopAndBottom
    width?: string | number
    height?: string | number
}

////////// Grid
interface GridOption extends StyleCommon {
    show?: boolean

    containLabel?: boolean
    backgroundColor?: Color
    borderColor?: Color
    borderWidth?: number

    zlevel?: number
    z?: number
    left?: LeftAndRight
    right?: LeftAndRight
    top?: TopAndBottom
    botom?: TopAndBottom
    width?: string | number
    height?: string | number
}

////////// Polar

////////// Axis xAxis, yAxis, angleAxis, radiusAxis, parallelAxis
interface AxisSplitLineStyle extends StyleCommon {
    color?: Color | Color[]
    width?: number
    opacity?: number
}

interface AxisSplitAreaStyle extends StyleCommon {
    color?: Color | Color[]
    opacity?: number
}

interface AxisLine {
    show?: boolean
    onZero?: boolean
    lineStyle?: LineStyle
}

interface AxisTick {
    show?: boolean
    inside?: boolean
    length?: number
    lineStyle?: LineStyle
}

interface AxisLabel {
    show?: boolean
    inside?: boolean
    rotate?: number
    margin?: number
    textStyle?: TextStyle
}

interface SplitLine {
    show?: boolean
    lineStyle?: AxisSplitLineStyle
}

interface SplitArea {
    show?: boolean
    areaStyle?: AxisSplitAreaStyle
}

interface Axis {
    show?: boolean
    zlevel?: number
    z?: number

    inverse?: boolean

    name?: string
    nameLocation?: 'start' | 'middle' | 'end'
    nameRotate?: number

    nameTextStyle?: TextStyle
    nameGap?: number

    silent?: boolean

    axisLine?: AxisLine
}

interface CategoryAxisData {
    value: string
    textStyle?: TextStyle
}

type AxisTickIntervalCallback = (index: number, value: string) => boolean
type AxisTickInterval = AxisTickIntervalCallback | number;
interface AxisTickWithInterval extends AxisTick {
    interval?: AxisTickInterval
}
interface AxisLabelWithInterval extends AxisLabel {
    interval?: AxisTickInterval
}
interface SplitLineWithInterval extends SplitLine {
    interval?: AxisTickInterval
}
interface SplitAreaWithInterval extends SplitArea {
    interval?: AxisTickInterval
}

interface CategoryAxis extends Axis {
    type: 'category'
    data: Array<string | CategoryAxisData>
    boundaryGap?: boolean
    axisTick?: AxisTickWithInterval
    axisLabel?: AxisLabelWithInterval
}
interface ValueAxis extends Axis {
    type: 'value' | 'time' | 'log'
    boundaryGap?: number[]

    min?: number
    max?: number
    scale?: boolean
    splitNumber?: number
    minInterval?: number
    interval?: number

    axisTick?: AxisTick
    axisLabel?: AxisLabel
}

interface CategoryAxisWithSplitter extends CategoryAxis {
    splitLine?: SplitLineWithInterval
    splitArea?: SplitAreaWithInterval
}

interface ValueAxisWithSplitter extends ValueAxis {
    splitLine?: SplitLine
    splitArea?: SplitArea
}

interface ValueXAxis extends ValueAxisWithSplitter {
    gridIndex?: number
    position?: 'top' | 'bottom'
}
interface CategoryXAxis extends CategoryAxisWithSplitter {
    gridIndex?: number
    position?: 'top' | 'bottom'
}
interface ValueYAxis extends ValueAxisWithSplitter {
    gridIndex?: number
    position?: 'left' | 'right'
}
interface CategoryYAxis extends CategoryAxisWithSplitter {
    gridIndex?: number
    position?: 'left' | 'right'
}
type XAxisOption = ValueXAxis | CategoryXAxis
type YAxisOption = ValueYAxis | CategoryYAxis

interface ValueRadiusAxis extends ValueAxisWithSplitter {
    polarIndex?: number
}
interface CategoryRadiusAxis extends CategoryAxisWithSplitter {
    polarIndex?: number
}
interface ValueAngleAxis extends ValueAxisWithSplitter {
    polarIndex?: number
    clockwise?: boolean
    startAngle?: number
    // FIXME angleAxis has no name
}
interface CategoryAngleAxis extends CategoryAxisWithSplitter {
    polarIndex?: number
    clockwise?: boolean
    startAngle?: number
}
type RadiusAxisOption = CategoryRadiusAxis | ValueRadiusAxis
type AngleAxisOption = CategoryAngleAxis | ValueAngleAxis

interface ValueParallelAxis extends ValueAxis {
    dim?: string
    areaSelectStyle?:  AreaStyle
    realtime?: boolean
}
interface CategoryParallelAxis extends ValueAxis {
    dim?: string
    areaSelectStyle?:  AreaStyle
    realtime?: boolean
}
type ParallelAxisOption = ValueParallelAxis | CategoryParallelAxis


//////// LineSeries
interface LineSeriesOption {
    type: 'line'

    smooth?: boolean
}

//////// LineSeries
interface BarSeriesOption {
    type: 'bar'

    barGap?: string | number
}

declare namespace echarts {

    function init(dom: HTMLDivElement | HTMLCanvasElement, theme?: Object | string, opts?: {
        devicePixelRatio?: number
    }): ECharts;

    function connnct(group: string | string[])

    function disConnect(group: string);

    function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement);

    function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement);

    function registerMap(mapName: string, geoJson: Object, specialAreas?: Object);

    function registerTheme(themeName: string, theme: Object);

    class ECharts {

        setOption(option: Option);

        getWidth(): number;

        getHeight(): number;

        getDom(): HTMLDivElement | HTMLCanvasElement;

        getOption(): Option

        on(name: string, handler: Function, context?: Object)

        off(name: string, handler: Function)

        showLoading(type?: string, opts?: Object)

        hideLoading()

        getDataURL(opts: {
            type?: string,
            pixelRatio?: number,
            backgroundColor?: string
        }): string

        getConnectedDataURL(opts: {
            type?: string,
            pixelRatio?: number,
            backgroundColor?: string
        }): string

        clear()

        isDisposed(): boolean

        dispose()
    }

    interface Option {
        title: TitleOption | TitleOption[],
        legend?: LegendOption[],
        grid?: GridOption | GridOption[],
        xAxis?: XAxisOption | XAxisOption[],
        yAxis?: YAxisOption | YAxisOption[],
        polar?: Object,
        radiusAxis?: RadiusAxisOption | RadiusAxisOption[],
        angleAxis?: AngleAxisOption | AngleAxisOption[],
        radar?: Object,
        dataZoom?: Object[],
        visualMap?: Object[],
        tooltip?: Object,
        toolbox?: Object,
        geo?: Object,
        parallel?: Object,
        parallelAxis?: ParallelAxisOption[],
        timeline?: Object,

        // Wait for tagged union type
        series?: Array<LineSeriesOption | BarSeriesOption>,

        color?: Color[],
        backgroundColor?: Color,
        textStyle?: TextStyle,

        animation?: boolean,
        animationDuration?: number,
        animationEasing?: string,
        animationDurationUpdate?: number,
        animationEasingUpdate?: string,
        animationThreshold?: number,
        hoverLayerThreshold?: number,
        progressive?: number,
        progressiveThreshold?: number,
        blendMode?: string
    }

}

declare module 'echarts' {
    export = echarts;
}