import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './Clock';
// import NameForm from './NameForm';
// import TaskListTable from './TaskListTable';
import ToDoContainer from './ToDo/ToDoContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ToDoContainer />,
    document.getElementById('root')
);

registerServiceWorker();
