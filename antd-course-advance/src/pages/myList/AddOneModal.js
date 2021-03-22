import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item

export default class AddOneModal extends Component {

    handleOk = () => {
        const { onCancel, dispatch, validateFields } = this.props
        validateFields((err, values) => {
            if (!err) {
                console.log(values)
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                });
                // 关闭弹框
                onCancel()
            }
        })
    }

    render() {
        const { visible, onCancel, getFieldDecorator } = this.props
        return (
            <Modal
                title='新建记录'
                visible={visible}
                onCancel={onCancel}
                onOk={this.handleOk}
                okText='确认'
                cancelText='取消'
            >
                <Form>
                    <FormItem label='名称'>
                        {
                            getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入名称' }]
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label='描述'>
                        {
                            getFieldDecorator('desc')(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="链接">
                        {
                            getFieldDecorator('url', {
                                rules: [{
                                    type: 'url',
                                    message: '请输入有效的URL'
                                }]
                            })(
                                <Input />
                            )
                        }
                    </FormItem>

                    {/* 自定义控件 */}
                    {/* <FormItem label='自定义输入' >
                        {
                            getFieldDecorator('custom',{
                                rules:[{
                                    required:true
                                }]
                            })(
                                // 自定义的
                                <MyInput />
                            )
                        }
                    </FormItem> */}
                </Form>
            </Modal>
        )
    }
}
