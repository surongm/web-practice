import React, { Component } from 'react'
import { Table, Button, Modal, Form, Input } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item

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

    // antd4
    formRef = React.createRef()

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

    handleOk = () => {
        const { dispatch } = this.props
        console.log(this.formRef, this.formRef.current.validateFields)
        // formRef.current.validateFields  报错 暂时无法解决
        this.formRef.current.validateFields()
            .then(values => {
                dispatch({
                    type: 'cards/addOne',
                    payload: values
                })
                // 关闭弹框
                this.handleCancel()
            })
    }

    render() {
        const { cardsList, cardsLoading } = this.props
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
                <Modal
                    title='新建记录'
                    visible={visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    okText='确认'
                    cancelText='取消'
                >
                    {/* <Form ref={formRef}>
                    <FormItem label='名称' name='name' rules={[{ required: true }]}>
                        <Input />
                    </FormItem>
                    <FormItem label='描述' name='desc'>
                        <Input />
                    </FormItem>
                    <FormItem label="链接" rules={[{ type: 'url' }]}>
                        <Input />
                    </FormItem>
                </Form> */}
                    <Form ref={this.formRef}>
                        <FormItem label='名称' name='name' rules={[{ required: true }]}>
                            <Input />
                        </FormItem>
                        <FormItem label='描述' name='desc'>
                            <Input />
                        </FormItem>
                        <FormItem label='链接' name='url' rules={[{ type: 'url' }]}>
                            <Input />
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MyList)
