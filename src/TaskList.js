import React, { Component } from 'react';
// import './TaskList.css';
import TaskRow from './TaskRow';

class TaskList extends Component {
    render() {
        var rows = [];
        this.props.tasks.forEach((task,index) => {
            if(this.props.Onlycompleted) {
                if(task.completed) {
                    rows.push(<TaskRow task={task} key={index} />);
                    return;
                }
            }
            else {
                rows.push(<TaskRow task={task} key={index} />);
            }
        });
        return (
            <div>
                {rows}     
            </div>
        );
    }
}

export default TaskList;