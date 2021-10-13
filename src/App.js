import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';
import Tasks from './components/Tasks';
import deleteSound from './static/delete.mp3';
import createSound from './static/oneup.mp3';
import successSound from './static/success.mp3';
let deleteSound2 = new Audio(deleteSound);
let createSound2 = new Audio(createSound);
let success = new Audio(successSound);
success.volume = 0.3;


function App() {
  const [showInputMenu, setShowInputMenu] = useState(false)
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
  createSound2.play();
  createSound2.volume = 0.1;
  let newState = [{id: state.length + 1,...newTask},...state]
  setState([...newState]);
}

function del(element) {
  deleteSound2.play();
  setState(state.filter((task) => task.id !== element));  
  deleteSound2.volume = 0.1;
}

function toggleReminder (identity) {
  deleteSound2.play();
  deleteSound2.volume = 0.1;
    setState(state.map( (task) => task.id === identity ? {...task, reminder: !task.reminder} : task))
}

function toggleShowInputs(identity) {
  success.play();
  setShowInputMenu(!showInputMenu);
}


  return (
    <div className="App">
     <Header tasks = {state} toggleInputs = {toggleShowInputs} del = {del} showInputsState = {showInputMenu}/>
      {showInputMenu ? <Input add= {addTask}/> : ''}

      {state.length > 0 ? <Tasks tasks={state} del = {del} toggle = {toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}
export default App;