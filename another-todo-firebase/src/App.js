import React, { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState(['First item', 'Second item', 'Third item']);
	const [input, setInput] = useState('');

	const addTodo = (event) => {
		event.preventDefault();
		setTodos([...todos, input]);
		setInput('');
	}

	return (
	    <div className="App">
			<h1>Task list with Firebase 🤟</h1>
			<form>
				<input type="text"
					   placeholder="Enter new todo"
					   onChange={event => setInput(event.target.value)}
					   value={input} />
				<button onClick={addTodo}>Add new item</button>
			</form>

			<ul>
				{todos.map(todo => (
					<li>{todo}</li>
				))}
			</ul>
		</div>
    );
}

export default App;
