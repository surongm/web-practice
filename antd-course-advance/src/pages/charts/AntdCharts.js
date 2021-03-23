import React, { Component } from 'react'
import { Column } from '@ant-design/charts'
import { connect } from 'dva'

const mapStateToProps = (state) => {
    return {
        data: state.cards.statisticnoid
    }
}

@connect(mapStateToProps)
export default class AntdCharts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {
                data: [],
                xField: 'genre',
                yField: 'sold',
                label: {
                    position: 'middle',
                    style: {
                        fill: '#FFFFFF',
                        opacity: 0.6
                    }
                },
                meta: {
                    genre: { alias: '商品' },
                    sold: { alias: '销售额' }
                }
            }

        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'cards/getStatisticNoId',
        })

        this.refreshCharts()
    }

    // 不写这个第一次加载的时候没有数据
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.refreshCharts()
        }
    }

    refreshCharts = () => {
        console.log(this.props.data)

        // ...一定要写在前面啊啊啊 
        this.setState({
            config: {
                ...this.state.config,
                data: this.props.data,
            }
        })
    }

    render() {
        const { config } = this.state
        return (
            <div>
                <Column {...config} />
            </div>
        )
    }
}
