import './App.css';
import {
  Eventdemo,
  Statedemo,
  Propsdemo,
  DefaultPropsdemo,
  ImmutablePropsParent,
  Listjsx,
  Listdemo,
  UsersListParent
} from './components'

function App() {
  return (
    <div className="App">
      <Eventdemo />
      <Statedemo />

      {/* ===================props===================== */}
      {/* <Propsdemo /> */}
      <Propsdemo
        // 可以传入字符串
        // likedText='已赞' unlikedText='赞' 
        // 也可以传对象
        // wordings={{ likedText: '已赞', unlikedText: '赞' }}
        // 还可以传函数
        onClick={() => console.log('Click on like button')}
      />

      <DefaultPropsdemo
      // likedText='已赞' unlikedText='赞'
      />

      <ImmutablePropsParent />

      {/* ===================list============================= */}
      <Listjsx />
      <Listdemo />
      <UsersListParent />
      
    </div>
  );
}

export default App;
