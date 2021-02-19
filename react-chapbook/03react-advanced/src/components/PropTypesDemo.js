import React, { Component } from 'react'
// npm install --save prop-types
import PropTypes from 'prop-types'

export default class PropTypesDemo extends Component {
    static propTypes = {
        // comment: PropTypes.object
        comment: PropTypes.object.isRequired
    }

    render() {
        const { comment } = this.props
        return (
            <div>
                <p>{comment.username}</p>
                <p>{comment.content}</p>
            </div>
        )
    }
}
