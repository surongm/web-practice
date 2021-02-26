import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 第一个参数mapStateToProps 返回一个高阶函数（参数是WrappedComponent）
export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        // TODO:如何从store取数据

        render() {
            const { store } = this.context
            // stateProps 的意思是把这个对象里面的全部属性通过 props 方式传递
            let stateProps = mapStateToProps(store.getState())

            return (
                <WrappedComponent {...stateProps} />
            )
        }
    }
    return Connect
} 
