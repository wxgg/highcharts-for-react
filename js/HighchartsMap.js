import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'fast-deep-equal';
import highmaps from 'highcharts/highmaps.js';
const propTypes = {
    afterFristRender: PropTypes.func,
    afterRender: PropTypes.func,
    beforeFristRender: PropTypes.func,
    beforeRender: PropTypes.func,

    className: PropTypes.string,
    string: PropTypes.object,
    options: PropTypes.object

};
const defaultProps = {
    afterFristRender: (chart) => {},
    afterRender: (chart) => {},
    beforeFristRender: (chart) => {},
    beforeRender: (chart) => {},

    className: '',
    string: {},
    options: {}

};
class HighchartsMapCore extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      
      this.highcharts = '';
    }
    componentWillMount(){
        //console.log('beforeFristRender', 1111111111111)
        //beforrender
        let { beforeFristRender, options } = this.props;
        if( beforeFristRender instanceof Function){
            beforeFristRender(options);
        }
    }
    componentWillUpdate(){
        //console.log('beforeRender', 3333333333)
        let { beforeRender, options } = this.props;
        if( beforeRender instanceof Function){
            beforeRender(options);
        }
    }
    componentDidUpdate(){
        //afterrender
        //console.log('afterRender', 2222222222222)
        let { afterRender, options } = this.props;
        if( afterRender instanceof Function){
            afterRender(this.highcharts, options);
        }
    }
    componentWillReceiveProps(nextProps){
        let { options } = this.props;
        if (!isEqual(options, nextProps.options)){
            this.createChart(nextProps.options)
        }

    }
    componentDidMount(){
        // afterFristRender
        //console.log('afterFristRender', 2222222222222)
        let { afterFristRender,  options} = this.props;
        // 图表初始化函数
        let chart = this.createChart(options)
        if( afterFristRender instanceof Function){
            afterFristRender(chart, options);
        }
    }
    componentWillUnmount(){
        //destory
        try{
            if(this.highcharts){
                this.highcharts.destroy();
            }else{
                throw 'charts has not ready'
            }
        }catch(e){
            console.error(e);
        }
    }
    createChart = (options) =>  {
        try{
            if(options){
                // 图表初始化函数
                this.highcharts = highmaps.mapChart(this.container, options);
                return this.highcharts;
            }else{
                this.highcharts = {};
                throw 'options is not defind'
            }

        }catch(e){
            console.error(e);
        }
    }
    render() {
        
        let {className, style} = this.props;
        return (
            <div   className = {className} style = {style}
                ref={(container) => this.container = container}
            >
            </div>
        );
      }
}
HighchartsMapCore.propTypes = propTypes;
HighchartsMapCore.defaultProps = defaultProps;
export default HighchartsMapCore;