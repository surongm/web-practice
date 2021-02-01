import React, { Component } from 'react'

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

export default class Listdemo extends Component {
    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>Listdemo</h1>
                </div>
                <div>
                    {
                        users.map((user) => {
                            return (
                                <div>
                                    <p>姓名： {user.username}</p>
                                    <p>年龄： {user.age}</p>
                                    <p>性别： {user.gender}</p>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
