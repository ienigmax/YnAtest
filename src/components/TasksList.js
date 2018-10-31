import React, { Component } from 'react';
import TaskBox from './TaskBox';

class TasksList extends React.Component{
    // state:{}

    render() {
        return (
            <div className="app-div">
                <table className="table-tasks">
                    <tr>
                        <th className="app-header">
                            <label className="title-small">Add Your Items Here</label>
                        </th>
                    </tr>
                    <TaskBox id='1' label='milk' />
                    <TaskBox id='2' label='kartoshka' />
                    <TaskBox id='3' label='snikers' />
                    <TaskBox id='4' label='mana' />
                </table>

            </div>
        )
    }
}

export default TasksList;

