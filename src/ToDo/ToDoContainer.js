import React, { Component } from 'react';
import ToDOForm from './ToDoForm';
import LocalstorageService from './services/LocalstorageService';

class ToDoContainer extends Component {
    static get TABS() {
        return {
            'all': 0,
            'active': 1,
            'completed': 2
        };
    }

    constructor(props) {
        super(props);

        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);

        this.LocalstorageService = new LocalstorageService();
        console.log('tabs', this.TABS);
        this.state = {
            'tasks': this.LocalstorageService.getItem(),
            'currTab': this.TABS.all
        };
    }

    handleTaskSubmit(task) {
        this.LocalstorageService.setItem(task);
        this.setState({
            'tasks' : this.LocalstorageService.getItem()
        });
    }

    render() {
        return(
            <div className="app-cnt">
                <ToDOForm onTaskSubmit={this.handleTaskSubmit} />
            </div>
        )
    }
}

export default ToDoContainer;