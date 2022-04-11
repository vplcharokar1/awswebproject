import logo from './logo.svg';
import './App.css';
import DemoParent from './component/DemoParent';
import PropParent from './component/PropParent';
import EventDemo from './component/EventDemo';
import MissedGoal from './component/MissedGoal';
import Goal from './component/Goal';
import ListDemo from './component/ListDemo';
import FormDemo from './component/FormDemo';

function App() {
  return (
    <div className="App">
      {/* <DemoParent/> */}
      {/* <PropParent/>
      <EventDemo/>
      <MissedGoal/>
      <Goal isGoal={false}/>
      <ListDemo/> */}

      <FormDemo/>

    </div>
  );
}

export default App;
