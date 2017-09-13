import React, { Component } from 'react';

class ToDoForm extends Component {
    constructor(props) {
        super(props);

        this.handleTaskSubmitChange = this.handleTaskSubmitChange.bind(this);
    }

    handleTaskSubmitChange(event) {
        var ENTER_KEY = 13;
        if (event.keyCode !== ENTER_KEY) {
            return;
        }
        this.props.onTaskSubmit(event.target.value);
        event.target.value = '';
    }

    render() {
        return(
            <header className="header">
                <h1>todos</h1>
                <input type="text" placeholder="What needs to be done?" onKeyDown={this.handleTaskSubmitChange}/>
            </header>
        )
    }
}

export default ToDoForm;