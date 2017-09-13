import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.handleTaskToggle = this.handleTaskToggle.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
    }

    handleTaskToggle(id) {
        this.props.onTaskToggle(id);
    }

    handleTaskDelete(id) {
        this.props.onTaskDelete(id);
    }

    render() {
        let task = this.props.task;
        return(
            <li className={ task.completed && 'completed' }>
                <div className="task">
                    <label className="css-checkbox">
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => this.handleTaskToggle(task.id)}
                        />
                        <i className="checkbox"></i>
                    </label>
                    <span>{task.title}</span>
                    <button 
                        className="remove-task"
                        onClick={() => this.handleTaskDelete(task.id)}
                    >
                    </button>
                </div>
            </li>
        )
    }
}

export default ToDoItem;