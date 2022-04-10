import logo from './logo.svg';
import './App.css';
import DemoParent from './component/DemoParent';
import PropParent from './component/PropParent';

function App() {
  return (
    <div className="App">
      {/* <DemoParent/> */}
      <PropParent/>
    </div>
  );
}

export default App;
