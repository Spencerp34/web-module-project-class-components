import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      agenda: []
    }
  }

  addItem = (name) => {
    const newItem = {
      task: name,
      id: this.state.agenda.length,
      completed: false
    }
    const newAgenda = [...this.state.agenda, newItem]
    this.setState({
      agenda: newAgenda
    })
  }

  toggleItem = (id) => {
    const newAgenda = this.state.agenda.map(item => {
      if(item.id === id){
        return{
          ...item,
          completed: !item.completed
        }
      }else{
        return(item)
      }
    })
    this.setState({
      agenda: newAgenda
    })
  }

  clearCompleted = () => {
    const newAgenda = this.state.agenda.filter(item => {
      return(item.completed === false);
    })
    
    this.setState({
      agenda: newAgenda
    })
  }


  render() {
    return (
      <div>
        <h2>To do List:</h2>
        <TodoList agenda={this.state.agenda} toggleItem={this.toggleItem} agenda={this.state.agenda} clearCompleted={this.clearCompleted}  />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
