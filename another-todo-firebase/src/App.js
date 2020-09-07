import React, { useState, useEffect } from "react";
import "./App.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('todos').orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setTodos(snapshot.docs.map(doc => doc.data().text));
			});
	}, []);

	const addTodo = (event) => {
		event.preventDefault();
		db.collection('todos').add({
			text: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setInput("");
	};

	return (
		<div className="App">
			<h1>🚀 Task list with Firebase 🤟</h1>
			<FormControl>
				<TextField
					id="outlined-basic"
					label="Enter new todo"
					variant="outlined"
					placeholder="Enter new todo"
					onChange={(event) => setInput(event.target.value)}
					value={input} />
				<Button
					disabled={!input}
					color="secondary"
					onClick={addTodo}>
					Add new item
				</Button>
			</FormControl>

			<List>
				{todos.map((todo) => (
					<ListItem button>
						<ListItemIcon>
							<AttachFileIcon />
						</ListItemIcon>
						<ListItemText primary={todo} />
					</ListItem>
				))}
			</List>
		</div>);
}

export default App;
