
// 3、创建一个createStore 专门生成state和dispatch
// function createStore(state, stateChanger) {
//   const getState = () => state
//   const dispatch = (action) => stateChanger(state, action)
//   return { getState, dispatch }
// }

// 3、创建一个createStore 专门生成state和dispatch
// 监听数据变化
function createStore(state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)

  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }

  return { getState, dispatch, subscribe }
}

// 1、渲染函数
function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}


function renderContent(content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

// 1、数据
const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red'
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}


// 2、需要一个函数dispatch——专门负责数据的修改
function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break;
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))

// 4、首次渲染页面
renderApp(store.getState())
// 修改标题文本
store.dispatch({
  type: 'UPDATE_TITLE_TEXT',
  text: '《React.js 小书》'
})
// 修改标题颜色
store.dispatch({
  type: 'UPDATE_TITLE_COLOR',
  color: 'blue'
})
// 后面不管如何 store.dispatch，都不需要重新调用renderApp