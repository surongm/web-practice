import React, { Component } from 'react'
import { Table } from 'antd';
import { connect } from 'dva';

const mapStateToProps = (state) => {
    // console.log(state.loading.effects['cards/queryList'], state.loading)
    // state.cards.cardsList 和 state['cards'].cardsList 一个意思
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList']
    }
}

class MyList extends Component {
    // 页面加载数据
    // 可以直接dispatch 不需要传第二个参数
    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList'
        })
    }

    // 定义所需要的的列
    columns = [
        {
            title: '名称',
            dataIndex: 'name'
        },
        {
            title: '描述',
            dataIndex: 'desc'
        },
        {
            title: '链接',
            dataIndex: 'url',
            render: value => <a href={value}>{value}</a>
        }
    ]

    render() {
        const { cardsList, cardsLoading } = this.props
        console.log(cardsList)
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={cardsList}
                    loading={cardsLoading}
                    rowKey='id'
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(MyList)
