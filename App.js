import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';



export default class App extends React.Component{
  
  
  state = {
    task : "",
    taskList: []
  }
  deleteItem(index){
    const array = this.state.taskList;
    array.splice(index,1);
    this.setState({
      taskList : array 
    });
  }

  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <input type="/text" value={this.state.task} onChange={(event)=>{
            this.setState({task:event.target.value})
          }}></input>
          <button onClick = {()=>{
            this.setState({taskList : [...this.state.taskList,...[this.state.task]],task : ""})
          }}>add</button>
        </div>  
          <ul>
          {this.state.taskList.map((task,index)=>
            <li key={index}><h2>{task}</h2> 
              <button onClick={this.deleteItem.bind(this,index)}>
                Delete
              </button>
            </li>)}
          </ul>

   
          
          
          
        </header>
        
      </div>
    );
  }
}


