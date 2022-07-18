
import './App.css';
import {Component} from 'react';


class App extends Component {
  state ={
    tasks:[],
    

  }
  AddTask = (event)=> {
    event.preventDefault();
    let Taskslist = this.state.tasks;
    Taskslist.push(event.target.task.value);
    this.setState({tasks:Taskslist})
  }
  render(){
    return (
      <div className='App'>
       <div className='Todo_app'>
        <form onSubmit={this.AddTask}>
          <h1>To Do Task</h1>
          <input placeholder='Add your Task' name='task'/>
          <input type='submit'></input>
        </form>
        <ul>
          {this.state.tasks.map((task,index)=>
          <li key={index}>{task}</li>)}

        </ul>
       </div>
      </div>
    )
  }
}


export default App ;