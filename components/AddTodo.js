import React from 'react';

class AddTodo extends React.Component {

  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    input.value = "";
    this.props.pushTodo(value);
  }

  render(){
    return(
      <div>
        <form className="addTodo" onSubmit={this.addTodo}>
          <input type="text"/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
