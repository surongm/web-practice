import './App.css';
import {
  UnmountCompParent,
  ClockMountParent,
  Refdemo,
  HtmlDemo,
  PropTypesDemoParent
} from './components'

function App() {
  return (
    <div className="App">
      <UnmountCompParent />
      <ClockMountParent />
      <Refdemo />
      <HtmlDemo />
      <PropTypesDemoParent />
    </div>
  );
}

export default App;
