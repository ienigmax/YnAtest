import React, { Component } from 'react';
import $ from 'jquery';

class TaskBox extends React.Component{
    state= {
        cssClass: "task-label"
    };



    _markTaskFinished = () => {
        if($("#chkbox-" + this.props.id + ":checkbox:checked").length > 0){
            this.setState({
                cssClass: 'task-label-finished'
            })
        } else {
            this.setState({
                cssClass: 'task-label'
            })
        }
    };

    _removeTask = () => {
        $('#box-'  + this.props.id ).html('');

    };


    render() {
        console.log(this.state.cssClass);
        return (
            <tr className="task-lines" id={"box-" + this.props.id}>
                <td>
                    <div className="task-box">
                        <input type="checkbox"
                               className={"checkbox-task"}
                               id={"chkbox-" + this.props.id}
                               onClick={this._markTaskFinished}
                        />
                        <label
                                className={this.state.cssClass}
                                id={"tsk-" + this.props.id}>
                            {this.props.label}
                        </label>
                        <tr className="remover">
                        <span class="delete-btn"
                              id={"btn-" + this.props.id}
                              onClick={this._removeTask}
                        >X</span>
                        </tr>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TaskBox;

