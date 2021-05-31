import React from 'react'


class TodoForm extends React.Component{
    constructor() {
        super()
        this.state = {
          input:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.input)
        this.props.addItem(this.state.input)
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChanges} type='text' name='task' />
                <button> Add </button>
            </form>
        )
    }
}



export default TodoForm