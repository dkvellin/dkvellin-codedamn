import React from 'react';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';


class ListTodos extends React.Component {
  constructor(){
      super();
      this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(event){
    var todoToDelete = event.target.parentNode.querySelector('span').innerText;
    this.props.removeTodo(todoToDelete);
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return <li key={index}>
                <span>{todo}</span>
                <button onClick={this.deleteTodo}>X</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ListTodos;
