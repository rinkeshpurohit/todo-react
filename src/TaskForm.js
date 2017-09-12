import React, { Component } from 'react';
import './TaskForm.css';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.handleTaskinputChange = this.handleTaskinputChange.bind(this);
        this.handleCompletedCheckChange = this.handleCompletedCheckChange.bind(this);
    }

    handleTaskinputChange(event) {
        this.props.onTaskinput(event.target.value);
    }

    handleCompletedCheckChange(event) {
        this.props.onCompletedCheck(event.target.checked);
    }
    
    render() {
        return (
            <form>
                <input type="text"
                    placeholder="Search tasks.."
                    value={this.props.currTask}
                    onChange={this.handleTaskinputChange} />
                <br />
                <label>
                    Show only completed
                    <input type="checkbox"
                        value={this.props.Onlycompleted}
                        onChange={this.handleCompletedCheckChange} />
                </label>
            </form>
        );
    }
}

export default TaskForm;