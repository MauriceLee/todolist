import React, { Component } from 'react';
import Title from './components/Title/Title';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['買牛奶', '繳電話費', '去銀行']
    }
  }

  createTodo(newtodo) {
    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  render() {
    return (
      <div>
        <Title todos={this.state.todos}/>
        <CreateTodo todos={this.state.todos} createTodo={(newtodo) => this.createTodo(newtodo)}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;