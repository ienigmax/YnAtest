import React from 'react';
import TaskList from './TasksList';

const TasksAppContainer = (props) => {
    return(
        <div className="tasks-container">
            <div className="header-text">
                <label className="title">Shopping List</label>
            </div>
            <div className="app-section">
                <TaskList/>
            </div>
        </div>
    )
};

export default TasksAppContainer;