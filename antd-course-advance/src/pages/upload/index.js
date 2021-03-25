import React, { Component } from 'react'
import { Upload, message, Button, Icon } from 'antd'

const fileProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name}上传成功`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name}上传失败`)
        }
    }
}

export default class MyUpload extends Component {
    render() {
        return (
            <div>
                <Upload {...fileProps}>
                    <Button>
                        <Icon type='upload' /> 上传
                    </Button>
                </Upload>
            </div>
        )
    }
}
