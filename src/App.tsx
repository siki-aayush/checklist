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
export enum themes {
	light = "light",
	dark = "dark",
}

function App() {
	const [todos, setTodos] = useState<todoState>([]);
	const [status, setStatus] = useState<statusOpt>(statusOpt.all);
	const [theme, setTheme] = useState<themes>(themes.light);

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
			return newTodo.filter((todo) => todo.completed === false);
		});
	};

	const themeChangeHandler = () => {
		document
			.getElementsByTagName("body")[0]
			?.classList.toggle("light-mode");
		theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
	};

	let visibleTodos: todoState = todos;

	if (status === statusOpt.active) {
		visibleTodos = todos.filter((todo) => todo.completed === false);
	} else if (status === statusOpt.completed) {
		visibleTodos = todos.filter((todo) => todo.completed === true);
	}

	const swapEl = (source: number, dest: number | undefined) => {
		let sourceId: string, destId: string;
		if (dest !== undefined) {
			sourceId = visibleTodos[source].id;
			destId = visibleTodos[dest].id;
			setTodos((prevTodo) => {
				let newTodo = [...prevTodo];
				let temp: todo;
				source = newTodo.findIndex((todo) => todo.id === sourceId);
				dest = newTodo.findIndex((todo) => todo.id === destId);
				temp = newTodo[source];
				newTodo[source] = newTodo[dest];
				newTodo[dest] = temp;
				return newTodo;
			});
		}
	};

	return (
		<div className="App">
			<CreateTodo
				createHandler={createTodoHandler}
				themeChangeHandler={themeChangeHandler}
				theme={theme}
			/>
			<ListTodo
				todos={visibleTodos}
				completeHandler={completeHandler}
				statusHandler={statusHandler}
				deleteHandler={deleteHandler}
				clearHandler={clearHandler}
				swapEl={swapEl}
				pendings={
					todos.filter((todo) => todo.completed === false).length
				}
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
