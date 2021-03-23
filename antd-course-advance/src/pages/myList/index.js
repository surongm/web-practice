import React, { Component } from 'react'
import { Table, Button, Form, Popconfirm, Modal } from 'antd';
import AddOneModal from './AddOneModal'
import SampleChart from "./SampleChart";
import { connect } from 'dva';

const mapStateToProps = (state) => {
    // console.log(state.loading.effects['cards/queryList'], state.loading)
    // state.cards.cardsList 和 state['cards'].cardsList 一个意思
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
        statistic: state.cards.statistic
    }
}

class MyList extends Component {
    constructor() {
        super()
        this.state = {
            visible: false,
            statisticVisible: false,
            id: null
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
        },
        {
            title: '操作',
            dataIndex: 'operation',
            // 直接删除
            // render: (value,record) => <Button onClick={() => this.handleCLickDelete(record.id)} >删除</Button>
            //    带询问气泡
            render: (value, record) => (
                <Popconfirm
                    title="确定删除这一条数据?"
                    onConfirm={() => this.handleCLickDelete(record.id)}
                    okText='删除'
                    cancelText='取消'
                >
                    <Button>Delete</Button>
                </Popconfirm>
            )
        },
        {
            title: '',
            dataIndex: '_',
            render: (_, { id }) => {
                return (
                    <Button onClick={() => this.showStatistic(id)}>图表</Button>
                )
            }
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

    // 点击表格内的删除按钮
    handleCLickDelete = (id) => {
        console.log('id', id)
        this.props.dispatch({
            type: 'cards/deleteOne',
            payload: id
        })
    }

    // 点击图表按钮
    showStatistic = (id) => {
        this.props.dispatch({
            type: 'cards/getStatistic',
            payload: id
        })

        this.setState({
            id,
            statisticVisible: true
        })
    }

    // 弹框取消
    handleStatisticCancel = () => {
        this.setState({
            statisticVisible: false
        })
    }

    render() {
        const { cardsList, cardsLoading, dispatch, form: { getFieldDecorator, validateFields }, statistic } = this.props
        const { visible, statisticVisible, id } = this.state

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

                {/* 图表modal */}
                <Modal
                    visible={statisticVisible}
                    footer={null}
                    onCancel={this.handleStatisticCancel}
                >
                    <SampleChart data={statistic[id] ? statistic[id] : []} />
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Form.create()(MyList))
