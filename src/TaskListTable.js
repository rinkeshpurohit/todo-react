import React, { Component } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class TaskListTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTask : '',
            Onlycompleted: false
        };

        this.handleTaskinput = this.handleTaskinput.bind(this);
        this.handleCompletedCheck = this.handleCompletedCheck.bind(this); 
    }   

    handleTaskinput(task) {
        this.setState({
            currTask: task
        });
    }    

    handleCompletedCheck(status) {
        this.setState({
            Onlycompleted: status
        });
    }

    render() {
        return (
            <div>
                <TaskForm 
                    currTask={this.state.currTask}
                    Onlycompleted={this.state.Onlycompleted}
                    onTaskinput={this.handleTaskinput}
                    onCompletedCheck={this.handleCompletedCheck}
                />
                <TaskList
                    Onlycompleted={this.state.Onlycompleted}
                    tasks={this.props.tasks}
                />
            </div>
        );
    }
}

export default TaskListTable;