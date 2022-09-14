
import React, { Component } from 'react';
import { TodoBanner } from './TodoBanner';
import { TodoCreator } from './TodoCreator';
import { TodoRow } from './TodoRow';
import { VisibilityControl } from './VisibilityControl';
import './App.css';




class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Abraham',
      todoItems:[{ action: 'Buy Flowers', done: false},
    { action: 'Get Shoes', done: false},
    { action: 'Collect Tickets', done: true},
    { action: 'Call Joe', done: false}],
    showCompleted: true
    }
  }
  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }
  createNewTodo = (task) => {
    if(!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: task, done: false }]
      }, () => localStorage.setItem("todos", JSON.stringify(this.state)));
    }
  }

  toggleTodo = (todo) => this.setState({todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done } : item) });

  todotableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item => 
    <TodoRow key={ item.action } item={ item } callback={this.toggleTodo } />
    );

    componentDidMount = () => {
      let data = localStorage.getItem("todos");
      this.setState(data != null ? JSON.parse(data) : {
        userName: "Adam", 
        todoItems: [{
          action: "Buy Flowers", done: false
        },
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: 'Call Joe', done: false }],
        showCompleted: true
      });
    }


  render = () =>
    
      <div>
                <TodoBanner name={ this.state.userName } tasks={ this.state.todoItems} />
                <div className='container-fluid'>
                  <TodoCreator callback={ this.createNewTodo } />
                  <table className='table table-striped border-collapse' />
                </div>
                <div className='container-fluid'>
                  <div className='my-1'>
                  <input className='form-control p-4 pl-10 ml-5 mt-5 w-medium rounded-lg border border-gray-300 focus:ring-blue-500' value={ this.state.newItemText} onChange={ this.updateNewTextValue } /><br />
                    <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded px-5 py-2.5 ml-5 mr-2 mt-4' onClick={this.createNewTodo }>Add</button> 
                  </div>
                  <table className='table min-w-full border text-center ml-5 pr-5 mt-10'>
                  <thead className='font-medium px-6 py-4'>
                    <tr><th className='border'>Description</th><th>Done</th></tr>
                  </thead>
                  <tbody className='whitespace-nowrap bg-gray-100 whitespace-nowrap'>{ this.todotableRows(false) }</tbody>
                  </table>
                  <div className='bg-grey-500 text-white text-center p-2'>
                    <VisibilityControl description="Completed Tasks" isChecked={ this.state.showCompleted} callback={ (checked) => this.setState(({ showCompleted: checked}))} />
                  </div>
                  { this.state.showCompleted && <table className='table table-striped table-dordered'>
                    <thead>
                      <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todotableRows(true) }</tbody>
                    </table>}
                  
                </div>
      </div>  
    }


export default App;
