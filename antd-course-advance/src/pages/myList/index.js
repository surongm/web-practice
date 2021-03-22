import React, { Component } from 'react'
import { Table, Button, Form } from 'antd';
import AddOneModal from './AddOneModal'
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
    constructor() {
        super()
        this.state = {
            visible: false
        }
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

    // 页面加载数据
    // 可以直接dispatch 不需要传第二个参数
    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList'
        })
    }

    // 点击新建按钮
    handleClickOpenModal = () => {
        this.setState({
            visible: true
        })
    }

    // 弹框点击取消的时候
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const { cardsList, cardsLoading, dispatch, form: { getFieldDecorator, validateFields } } = this.props
        const { visible } = this.state

        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={cardsList}
                    loading={cardsLoading}
                    rowKey='id'
                />
                {/* 新建弹框 */}
                <Button onClick={this.handleClickOpenModal}>
                    新建
                    </Button>
                {
                    visible ?
                        <AddOneModal
                            visible={visible}
                            onCancel={this.handleCancel}
                            dispatch={dispatch}
                            getFieldDecorator={getFieldDecorator}
                            validateFields={validateFields}
                        />
                        : null
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Form.create()(MyList))
