import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state
    }
}

const store = createStore(themeReducer)

export default class ThemeApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <Content />
            </Provider>
        )
    }
}
