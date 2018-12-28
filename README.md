# highcharts-for-react
对 highcharts 的 的简单分装，还处在测试阶段。
```javascript
    <Highcharts 
        afterFristRender = {(chart) => {
            console.log(chart);
        }}
        afterRender = {(chart) => {console.log(chart)}}
        beforeFristRender = {(chart) => {console.log(chart)}}
        beforeRender = {(chart) => {console.log(chart)}}
        className = ""
        options = {this.state.opt}
    />
```