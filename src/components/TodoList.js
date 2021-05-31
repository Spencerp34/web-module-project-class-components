// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'


const TodoList = props => {
    const handleClick = () =>{
        props.clearCompleted()
    }

    return (
        <div className='todo-list'>
            {props.agenda.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Completed
            </button>
            
        </div>
    )
}


export default TodoList