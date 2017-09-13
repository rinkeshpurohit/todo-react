import React, { Component } from 'react';
import Constants from './Constants';

class ToDoFooter extends Component {
    constructor(props) {
        super(props);

        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleclearCompleted = this.handleclearCompleted.bind(this);
    }

    handleTabChange(tab) {
        this.props.onTabChange(tab);
    }

    handleclearCompleted() {
        this.props.onClearCompleted();
    }

    render() {
        let props = this.props;
        return(
            <footer>
                <span className="task-count">
                    <strong>{props.taskCount}</strong> { (props.taskCount === 0 || props.taskCount >1 ) ? 'tasks ' : 'task ' } left</span>
                <ul className="task-tab-list">
                    <li 
                        className={ props.currTab === Constants.TABS.ALL_TODOS && 'active' }
                        onClick={ () => this.handleTabChange(Constants.TABS.ALL_TODOS) }
                    >
                        All
                    </li>
                    <li 
                        className={ props.currTab === Constants.TABS.ACTIVE_TODOS && 'active' }
                        onClick={ () => this.handleTabChange(Constants.TABS.ACTIVE_TODOS) }
                    >
                        Active
                    </li>
                    <li 
                        className={ props.currTab === Constants.TABS.COMPLETED_TODOS && 'active' }
                        onClick={ () => this.handleTabChange(Constants.TABS.COMPLETED_TODOS) }
                    >
                        Completed
                    </li>
                </ul>
                <button 
                    className="clear"
                    onClick={this.handleclearCompleted}
                >
                    Clear Completed
                </button>
            </footer>
        )
    }
}

export default ToDoFooter;