import React, { Component } from 'react'
// 老版本
// import G2 from '@antv/g2'
// G2 4.0
import { Chart } from '@antv/g2'
import { connect } from 'dva'

const mapStateToProps = (state) => {
    return {
        data: state.cards.statisticnoid
    }
}

@connect(mapStateToProps)
export default class SampleChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }
        this.containerRef = React.createRef()
    }

    componentDidMount() {
        // G2 初始化图形代码
        // 老版本的写法报错
        // this.chart = new G2.Chart({

        // 4.0版本的写法
        this.chart = new Chart({
            // this.containerRef.current即为引用
            container: this.containerRef.current,
            width: 800,
            height: 400
        })

        this.props.dispatch({
            type: 'cards/getStatisticNoId',
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

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy()
        }
    }

    // 实现数值渲染
    refreshChart = () => {
        // console.log('data', this.props.data)
        // 接受data作为数据源
        // this.chart.source(this.props.data)
        this.chart.data(this.props.data)
        // 此处为硬编码
        this.chart.interval().position('genre*sold').color('genre');
        this.chart.render()
    }

    render() {
        return (
            <div ref={this.containerRef} />
        )
    }
}
