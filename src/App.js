import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navegation from './componets/Navegation';
import { todos } from './todos.json';
import Formulario from './componets/Formulario';

class App extends Component {
  constructor(){
    super();
   this.state ={
     todos  
   };
   this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos:[... this.state.todos, todo]
    })
  }

removeTodo(index){
 if(window.confirm('Seguro de eliminar la tarea??')){
  this.setState({
    todos: this.state.todos.filter((e, i)=>{
      return i!== index
    })
  })
 }
}

  render() {
   const todos= this.state.todos.map((todo, i)=>{
     return(
       
  <div className="col-md-4" key={i} >
    <div className="card mt-4">
         <div className="card-header">
         <h3>{todo.title}</h3>
         <span className="badge badge-pill badge-danger ml-2">
          {todo.priority}
         </span>
         </div>
         <div className="card-body">
          <p>{todo.description}</p>
          <p><i>{todo.Responsible}</i></p>
        </div>
        <div className="card-footer">
        <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
        Delete
        </button>
        </div>
    </div>
  </div>
  
     )
   })

    return (
      <div className="App">
      <Navegation titulo="Menu de tareas en React" />
      
      <div className="container">
         <div className="row mt-5">
         

        <div className="col-md-6">
        <img src={logo} className="App-logo" alt="logo" />

         <Formulario onAddTodo={this.handleAddTodo} />
         </div>

         { todos }
  
         </div>

      </div>
      </div>
    );
  }
}

export default App;