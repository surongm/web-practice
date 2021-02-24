import React, { Component } from 'react'

export default (WrappedComponent) => {
    class HocTest extends Component {
        // 这里可以做很多自定义逻辑
        render() {
            return (
                <WrappedComponent />
            )
        }
    }

    return HocTest
}

