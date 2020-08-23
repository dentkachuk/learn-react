import React from "react";
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex align-items-center">
            <h1>Todo List</h1>
            <h2>
                <span className="active-task">{toDo}</span> more to do, <span className="done-task">{done}</span> done
            </h2>
        </div>
    )
}

export default AppHeader;