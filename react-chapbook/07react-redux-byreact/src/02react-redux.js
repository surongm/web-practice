import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 第一个参数mapStateToProps 返回一个高阶函数（参数是WrappedComponent）
export const connect = (mapStateToProps) => (WrappedComponent) => {
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

        _updateProps() {
            const { store } = this.context
            // 额外传入props，让获取数据更加灵活方便
            let stateProps = mapStateToProps(store.getState(), this.props)
            this.setState({
                allProps: {
                    ...stateProps,
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
