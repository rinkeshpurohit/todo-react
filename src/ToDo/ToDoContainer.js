import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import ToDoFooter from './ToDoFooter';
import Constants from './Constants';
import LocalstorageService from './services/LocalstorageService';

class ToDoContainer extends Component {

    constructor(props) {
        super(props);

        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.deleteCompletedTasks = this.deleteCompletedTasks.bind(this);

        this.LocalstorageService = new LocalstorageService();
        this.state = {
            'tasks': this.LocalstorageService.getItems(),
            'currTab': Constants.TABS.ALL_TODOS
        };
    }

    handleTaskSubmit(task) {
        let tasks = this.LocalstorageService.addItem(task);
        this.saveTasks(tasks);
    }

    toggleAll(event) {
        let checked = event.target.checked;
        let tasks = this.state.tasks;
        tasks.forEach((task, i) => {
            task.completed = checked;
        });
        this.saveTasks(tasks);
    }

    toggleTask(id) {
        let tasks = this.state.tasks;
        let task = tasks.find(x => x.id === id);
        task.completed = !task.completed;
        this.saveTasks(tasks);
    }

    deleteTask(id) {
        let tasks = this.LocalstorageService.removeItem(id);
        this.saveTasks(tasks);
    }

    deleteCompletedTasks() {
        let tasks = this.LocalstorageService.getItems();
        this.saveTasks(tasks.filter((task) => !task.completed));
    }

    changeTab(tab) {
        this.setState({
            'currTab': tab
        });
    }

    saveTasks(tasks) {
        this.LocalstorageService.setItems(tasks);
        this.setState({
            'tasks' : tasks
        });
    }

    render() {
        let tasks = this.state.tasks;
        let TABS = Constants.TABS;

        let shown_tasks = tasks.filter(task => {
            switch (this.state.currTab) {
                case TABS.ACTIVE_TODOS:
                    return !task.completed;
                case TABS.COMPLETED_TODOS:
                    return task.completed;
                default: 
                    return true;
            }
        });

        let completed_count = tasks.reduce((accum, task) => {
            return task.completed ? accum+1 : accum
        }, 0);
        
        let active_count = tasks.length - completed_count;

        let todoItems = shown_tasks.map((task) => {
            return (
                <ToDoItem
                    task={task}
                    key={task.id}
                    onTaskToggle={this.toggleTask}
                    onTaskDelete={this.deleteTask}
                />
            )
        })

        if(tasks.length) {
            var main = (
                <section className="main">
                    <label className="css-checkbox" id="selectAll">
                        <input 
                            type="checkbox" 
                            name="selectAll"
                            checked={active_count === 0}
                            onChange={this.toggleAll}
                        />
                        <i className="checkbox selectAll"></i>
                    </label>
                    <ul className="task-list">
                        {todoItems}
                    </ul>
                </section>
            )

            var footer = (
                <ToDoFooter
                    taskCount={active_count}
                    currTab={this.state.currTab}
                    onTabChange={this.changeTab}
                    onClearCompleted={this.deleteCompletedTasks}
                />
            )

        }
        return(
            <div className="app-cnt">
                <ToDoForm onTaskSubmit={this.handleTaskSubmit} />
                {main}
                {footer}
            </div>
        )
    }
}

export default ToDoContainer;