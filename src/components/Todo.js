import React from 'react';

const Todo = props => {
  
    const handleClick = () => {
      props.toggleItem(props.item.id);

    }
    // console.log('testing', props.item)
    return (
      <div onClick={handleClick} className={`task${props.item.completed ? ' complete' : ''}`} >
        <p>{props.item.task}</p>
      </div>
    );
  };
  
  export default Todo;