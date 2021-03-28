import React, { Component } from 'react'
import { Button } from 'antd'

export default class Authority extends Component {
    constructor() {
        super()
        this.state = {
            auth: ["1", "2", "18", "20"]
        }
    }

    render() {
        const { auth } = this.state
        return (
            <div>
                Authority
                {
                    auth.includes("2") && auth.includes("3") ?
                        <Button>用户要有权限 2 and 3 才能看到按钮</Button>
                        : null
                }
                {
                    auth.includes("1") || auth.includes("18") ?
                        <Button>用户要有权限 1 or 18 </Button>
                        : null
                }
            </div>
        )
    }
}
