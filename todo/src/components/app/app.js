import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Learn React', important: true, id: 2},
            {label: 'Build App', important: true, id: 3},
            {label: 'Go Sleep', important: false, id: 4}
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex justify-content-between">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={ this.deleteItem }/>
            </div>
        )
    }
};
