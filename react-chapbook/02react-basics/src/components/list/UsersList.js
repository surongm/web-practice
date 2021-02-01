import React, { Component } from 'react'

export default class UsersList extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <p>姓名： {user.username}</p>
                <p>年龄： {user.age}</p>
                <p>性别： {user.gender}</p>
                <hr />
            </div>
        )
    }
}
