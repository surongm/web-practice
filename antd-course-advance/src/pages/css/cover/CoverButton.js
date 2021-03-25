import React from 'react'
import myStyles from './styles.less'
import { Button } from 'antd'


const CoverButton = () => {
    return (
        <div>
            <div>
                <Button type='primary'>原始样式</Button>
            </div>
            <div>
                <Button className={myStyles['ant-btn']} type='primary' >直接覆盖样式</Button>
            </div>
            <div className={myStyles['override-ant-btn']}>
                <Button>global圆角按钮</Button>
            </div>
        </div>
    )
}

export default CoverButton
