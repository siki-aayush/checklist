import React, { useState, useEffect } from "react";
import BottomStatus from "./components/BottomStatus";
import CreateTodo from "./components/CreateTodo";
import ListTodo from "./components/ListTodo";
import "./scss/style.scss";

export type todo = {
	id: string;
	note: string;
	completed: boolean;
};
// export type todoState = { [key: string]: todo };
export type todoState = Array<todo>;
export enum statusOpt {
	all = "all",
	active = "active",
	completed = "completed",
}

function App() {
	const [todos, setTodos] = useState<todoState>([]);
	const [status, setStatus] = useState<statusOpt>(statusOpt.all);

	useEffect(() => {
		statusHandler(statusOpt.all);
	}, []);

	const createTodoHandler = (note: string) => {
		let newTodo: todo = {
			id: Date.now().toString(),
			note: note,
			completed: false,
		};

		setTodos((prevTodos: Array<todo>) => {
			return [...prevTodos, newTodo];
		});
	};

	const completeHandler = (id: string) => {
		const idx = todos.findIndex((todo) => {
			return todo.id === id;
		});

		setTodos((prevTodo) => {
			let newTodo = [...prevTodo];
			newTodo[idx] = {
				...newTodo[idx],
				completed: !newTodo[idx].completed,
			};
			return newTodo;
		});
	};

	const statusHandler = (stat: statusOpt) => {
		document
			.querySelectorAll(`.lowest__${status}`)
			.forEach((node) => node?.classList.remove("status_active"));
		setStatus(stat);
		document
			.querySelectorAll(`.lowest__${stat}`)
			.forEach((node) => node?.classList.add("status_active"));
	};

	const deleteHandler = (id: string) => {
		setTodos((prevTodo) => {
			let newTodo = [...prevTodo];
			newTodo.splice(
				newTodo.findIndex((todo) => todo.id === id),
				1
			);
			return newTodo;
		});
	};

	const clearHandler = () => {
		setTodos((prevTodo) => {
			let newTodo = [...prevTodo];
			newTodo.filter((todo) => todo.completed === false);
			return newTodo;
		});
	};

	let visibleTodos: todoState = todos;

	if (status === statusOpt.active) {
		visibleTodos = todos.filter((todo) => todo.completed === false);
	} else if (status === statusOpt.completed) {
		visibleTodos = todos.filter((todo) => todo.completed === true);
	}

	return (
		<div className="App">
			<CreateTodo createHandler={createTodoHandler} />
			<ListTodo
				todos={visibleTodos}
				completeHandler={completeHandler}
				statusHandler={statusHandler}
				deleteHandler={deleteHandler}
				clearHandler={clearHandler}
			/>
			<div className="lowest container">
				<div className="todo container flex flex-c">
					<BottomStatus statusHandler={statusHandler} />
				</div>
			</div>
		</div>
	);
}

export default App;
