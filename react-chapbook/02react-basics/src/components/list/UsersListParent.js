import React, { Component } from 'react'
import UsersList from './UsersList'

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

export default class UsersListParent extends Component {
    render() {
        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>UsersListParent</h1>
                </div>
                <div>
                    {
                        // users.map((user,index) => <UsersList key={index} user={user} />)
                        // users.map((user,index) => (<UsersList key={index} user={user} />))
                        users.map((user, index) => { return <UsersList key={index} user={user} /> })
                    }
                </div>
            </div>
        )
    }
}
