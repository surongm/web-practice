import React, { Component } from 'react'
import { Chart } from '@antv/g2'

export default class SampleChart extends Component {
    constructor() {
        super()
        this.containerRef = React.createRef()
    }

    componentDidMount() {
        this.chart = new Chart({
            container: this.containerRef.current,
            width: 450,
            height: 300
        })

        this.refreshChart()
    }

    componentDidUpdate(prevProps) {
        // 数据更新的时候重新绘制
        // this.refreshChart()
        if (prevProps.data !== this.props.data) {
            this.refreshChart()
        }
    }

    // 销毁组件
    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy()
        }
    }

    refreshChart = () => {
        // console.log(this.props.data)
        // this.chart.source(this.props.data)
        this.chart.data(this.props.data)

        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render();
    }

    render() {
        return (
            <div ref={this.containerRef} >

            </div>
        )
    }
}
