import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';
import Tasks from './components/Tasks';



function App() {
  const [showMenu, setShowMenu] = useState(true)
  const [state, setState] = useState([
    {
        id: 1,
        text: 'eat',
        day: '30th June 1986',
        reminder: false

    },
    {
        id: 2,
        text: 'sleep',
        day: '11th Aug 1988',
        reminder: false

    },
    {
        id: 3,
        text: 'rest',
        day: '28th Sept 2020',
        reminder: false

    }
] )
function addTask(newTask) {
  let newState = [{id: state.length + 1,...newTask},...state]
  setState([...newState]);
}


function del(element) {
  setState(state.filter((task) => task.id !== element));
}


function toggle (identity) {
    setState(state.map( (task) => task.id === identity ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="App">
     <Header tasks = {state} del = {del}/>
     
      {showMenu && <Input add= {addTask}/>}
      {state.length > 0 ? <Tasks tasks={state} del = {del} toggle = {toggle}/> : 'No tasks to show'}
            
    </div>
  );
}
export default App;
