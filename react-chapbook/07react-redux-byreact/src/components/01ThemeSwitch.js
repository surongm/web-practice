import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    constructor() {
        super()
        this.state = {
            themeColor: ''
        }
    }

    componentDidMount() {
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
        const { store } = this.context
        const state = store.getState()
        this.setState({
            themeColor: state.themeColor
        })
    }

    // dispatch action 去改变颜色
    handleSwitchColor(color) {
        const { store } = this.context
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }

    render() {
        const { themeColor } = this.state
        return (
            <div>
                <button
                    style={{ color: themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}
                >
                    Red
                </button>
                <button
                    style={{ color: themeColor }}
                    onClick={() => this.handleSwitchColor('blue')}
                >
                    Blue
                </button>
            </div>
            // <div>
            //     <button
            //         style={{ color: 'red' }}
            //         onClick={this.handleSwitchColor.bind(this, 'red')}
            //     >
            //         Red
            //     </button>
            //     <button
            //         style={{ color: 'blue' }}
            //         onClick={() => this.handleSwitchColor('blue')}
            //     >
            //         Blue
            //     </button>
            // </div>
        )
    }
}

