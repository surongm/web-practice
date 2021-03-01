import './App.css';
import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Content from './containers/Content'
import Header from './containers/Header'

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

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    )
  }
}

