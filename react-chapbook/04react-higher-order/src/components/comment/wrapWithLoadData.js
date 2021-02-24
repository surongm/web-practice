import React, { Component } from 'react'

export default (WrappedComponent, name) => {
    class localStorageActions extends Component {
        constructor() {
            super()
            this.state = {
                data: null
            }
        }

        componentWillMount() {
            this.loadData()
        }

        loadData = () => {
            let data = localStorage.getItem(name)
            try {
                // 尝试把它解析为JSON对象
                this.setState({
                    data: JSON.parse(data)
                })
            } catch (e) {
                // 如果出错了就当做普通字符串
                this.setState({
                    data
                })
            }
        }

        saveData = (data) => {
            try {
                // 尝试把它解析为 JSON 字符串
                localStorage.setItem(name, JSON.stringify(data))
            } catch (e) {
                // 如果出错就当做普通字符串保存
                localStorage.setItem(name, data)
                // localStorage.setItem(name, '${data}')
            }
        }

        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    saveData={this.saveData}
                    // 其他参数原封不动地传递给包装的组件
                    {...this.props}
                />
            )
        }
    }
    return localStorageActions
}

