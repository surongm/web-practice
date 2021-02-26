import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'

// 第一个参数mapStateToProps 返回一个高阶函数（参数是WrappedComponent）
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super()
            this.state = {
                allProps: {}
            }
        }

        componentDidMount() {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        // _updateProps() {
        //     const { store } = this.context
        //     // 额外传入props，让获取数据更加灵活方便
        //     let stateProps = mapStateToProps(store.getState(), this.props)
        //     this.setState({
        //         allProps: {
        //             ...stateProps,
        //             ...this.props
        //         }
        //     })
        // }

        _updateProps() {
            const { store } = this.context
            // 防止 mapStateToProps 没有传入
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}
            // 防止 mapDispatchToProps 没有传入
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            return (
                <WrappedComponent {...this.state.allProps} />
            )
        }
    }
    return Connect
}


// 新增 provide 代码
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
