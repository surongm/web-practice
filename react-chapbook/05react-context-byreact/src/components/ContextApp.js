import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Main from './Main'

export default class ContextApp extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor() {
        super()
        this.state = {
            themeColor: 'red'
        }
    }

    componentDidMount() {
        this.setState({
            themeColor: 'green'
        })
    }

    getChildContext() {
        return {
            themeColor: this.state.themeColor
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}
