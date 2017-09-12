import React, { Component } from 'react';
// import './TaskRow.css';

class TaskRow extends Component {
    render() {
        return (
            <div className="clearfx">
                <div className="float task-title">{this.props.task.title}</div>
                <div className="float task-status">
                    {'status is '+this.props.task.completed}
                </div>
            </div>
        );
    }
}

export default TaskRow;