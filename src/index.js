import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './Clock';
// import NameForm from './NameForm';
import TaskListTable from './TaskListTable';
import registerServiceWorker from './registerServiceWorker';


const tasks = [
    {'title': 'task 1', 'completed': false},
    {'title': 'task 2', 'completed': false},
    {'title': 'task 3', 'completed': true},
    {'title': 'task 4', 'completed': false},
    {'title': 'task 5', 'completed': true},
]

// ReactDOM.render(
//     <TaskListTable tasks={tasks} />,
//     document.getElementById('root')
// );

registerServiceWorker();
