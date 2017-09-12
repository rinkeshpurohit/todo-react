import React, { Component } from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.handleTaskSubmitChange = this.handleTaskSubmitChange.bind(this);
    }

    handleTaskSubmitChange(event) {
        event.preventDefault();
        this.props.onTaskSubmit(event.target.task.value);
        event.target.task.value = '';
    }

    render() {
        return(
            <header className="header">
                <h1>todos</h1>
                <form name="todoForm" onSubmit={this.handleTaskSubmitChange}>
                    <input type="text" name="task" placeholder="What needs to be done?" />
                </form>
            </header>
        )
    }
}

export default ToDoForm;