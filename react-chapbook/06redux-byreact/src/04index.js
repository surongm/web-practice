
// 3、创建一个createStore 专门生成state和dispatch
// 监听数据变化
function createStore(state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)

  const getState = () => state
  const dispatch = (action) => {
    // stateChanger(state, action)
    // 覆盖原来对象
    state = stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }

  return { getState, dispatch, subscribe }
}

// 1、渲染函数
// 防止没有传入oldAppState，所以添加默认参数
function renderApp(newAppState, oldAppState = {}) {
  // 数据没有变化就不渲染
  if (newAppState === oldAppState) return;
  console.log('render app……')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
  // 数据没有变化就不渲染
  if (newTitle === oldTitle) return;
  console.log('render title……')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}


function renderContent(newContent, oldContent = {}) {
  // 数据没有变化就不渲染
  if (newContent === oldContent) return;
  console.log('render content……')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
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
// function stateChanger(state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break;
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// 2、需要一个函数dispatch——专门负责数据的修改
function stateChanger(state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      // 构建新对象并且返回
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      // 构建对象并且返回
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      // 没有修改，返回原来的对象
      return state
  }
}

const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState()))

// 缓存旧的state
let oldState = store.getState()
store.subscribe(() => {
  // 数据可能变化，获取新的 state
  let newState = store.getState()
  // 把新旧的 state 传进去渲染
  renderApp(newState, oldState)
  // 渲染完成后，新的 newState 变成了旧的 oldState 等待下一次数据变化重新渲染
  oldState = newState
})

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