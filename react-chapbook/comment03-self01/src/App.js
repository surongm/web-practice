import './App.css';
import CommentApp from './components/CommentApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const commentReducer = (state, action) => {
  if (!state) {
    return {
      comments: [],
      username: '',
      content: ''
    }
  }

  switch (action.type) {
    case 'LOAD_COMMENTS':
      return {
        ...state,
        comments: [
          ...action.comments
        ]
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [
          ...state.comments,
          action.comment
        ]
      }
    case 'DELETE_COMMENT':
      let comments = [...state.comments]
      comments.splice(action.index, 1)
      return {
        ...state,
        comments: [
          ...comments,
        ]
      }
    case 'UPDATE_TIMESTRING':
      let newComments = [...state.comments];
      for (let i in newComments) {
        if (action.index.toString() === i) {
          newComments[i].timeString = action.timeString
        }
      }
      return {
        ...state,
        comments: [
          ...newComments
        ]
      }
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case "CHANGE_CONTENT":
      return {
        ...state,
        content: action.content
      }
    default:
      return state
  }
}

const store = createStore(commentReducer)

function App() {
  return (
    <Provider store={store}>
      <CommentApp />
    </Provider>
  );
}

export default App;
