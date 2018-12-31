# highcharts-for-react
>对 highcharts 的 的简单封装。

## 使用示例
```javascript
    import { Highcharts, HighchartsStock, HighchartsMap } from  'highcharts-for-react';
    //或
    import Highcharts from  'highcharts-for-react/lib/Highcharts';
    <Highcharts 
        afterFristRender = {(chart, options) => {console.log(chart);}} //第一次渲染完成之后
        afterRender = {(chart, options) => {console.log(chart)}}//渲染完成之后
        beforeFristRender = {(options) => {console.log(options)}}//第一次渲染完成之前
        beforeRender = {(options) => {console.log(options)}}//渲染之前
        options = {{
                chart: {
                    type: 'bar'                     
                },
                title: {
                    text: '我的第一个图表'                 // 标题
                },
                xAxis: {
                    categories: ['苹果', '香蕉', '橙子']   // x 轴分类
                },
                yAxis: {
                    title: {
                        text: '吃水果个数'                // y 轴标题
                    }
                },
                series: [{                              // 数据列
                    name: '小明',                        // 数据列名
                    data: [1, 0, 4]                     // 数据
                }, {
                    name: '小红',
                    data: [5, 7, 3]
                }]
        }}
    />
```

## API
### 拥有三个输出对象
- Highcharts 基础图表
- HighchartsStock 堆叠效果图
- HighchartsMap 地图
### afterFristRender: Function(chart, options)
第一次渲染完成之后调用的钩子函数，返回参数有，当前chart对象，以及当前options。
### afterRender： Function(chart, options)
渲染完成之后调用的钩子函数，返回参数有，当前chart对象，以及当前options。
### beforeFristRender： Function(options)
第一次渲染完成之前调用，返回参数为当前options。
### beforeRender： Function(options)
渲染完成之前调用，返回参数为当前options。

### options 
chart 的详细配置。