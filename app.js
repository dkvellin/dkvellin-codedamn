import React from 'react';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      todos: this.props.tasks
    };
    this.pushTodo = this.pushTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  pushTodo(value){
    var updatedTodos = this.state.todos;
    updatedTodos.unshift(value);
    this.setState({
      todos: updatedTodos
    });
    this.updateLocalStorage(updatedTodos);
  }

  removeTodo(value){
    var todoAfterDelete = this.state.todos;
    todoAfterDelete.splice(todoAfterDelete.indexOf(value), 1);
    this.setState({
      todos: todoAfterDelete
    });
    this.updateLocalStorage(todoAfterDelete);
  }

  updateLocalStorage(updatedTasks) {
    console.log('Saving the todos');
    localStorage.setItem('listOfTodos', JSON.stringify(updatedTasks));
  }

  render() {
    return(
      <div>
        <h1>Todo App using React</h1>
        <AddTodo pushTodo={this.pushTodo}/>
        <ListTodos todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
};

export default App;
