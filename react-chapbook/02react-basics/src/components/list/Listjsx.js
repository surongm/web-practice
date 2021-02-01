import React, { Component } from 'react'

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

// export default class Listjsx extends Component {
//     render() {
//         return (
//             <div className='demo-box'>
//                 <div className='content'>
//                     <h1>Listjsx</h1>
//                 </div>
//                 <div>
//                     {[
//                         <p>aaaa</p>,
//                         <p>bbbb</p>,
//                         <p>cccc</p>
//                     ]}
//                 </div>
//             </div>
//         )
//     }
// }

export default class Listjsx extends Component {
    render() {
        let usersElements = []  //保存每个用户渲染以后的 JSX 数组 => 是dom节点数组对象
        for (let user of users) {
            usersElements.push(
                <div>
                    <p>姓名： {user.username}</p>
                    <p>年龄： {user.age}</p>
                    <p>性别： {user.gender}</p>
                    <hr />
                </div>
            )
        }

        console.log(usersElements)

        return (
            <div className='demo-box'>
                <div className='content'>
                    <h1>Listjsx</h1>
                </div>
                <div>
                    {usersElements}
                </div>
            </div>
        )
    }
}
